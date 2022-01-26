import useSWR from "swr"
import fetcher from "../../utils/fetcher"

const useGithubActivity = (username) => {
  const { data, error } = useSWR(
    `/api/github/activity/${username}/2022`,
    fetchGithubActivity
  )

  console.log(error)
  return { activity: data, error }
}

const fetchGithubActivity = async (url) => {
  const res = await fetcher(url)
  const { contributionCount, contributions } = formatContributions(
    res.contributions,
    res.year
  )

  return {
    ...res,
    contributions,
    contributionCount,
  }
}

const formatContributions = (contributions, year) => {
  const { flattenedContributions, contributionCount } =
    flattenContributions(contributions)

  const datedContributions = addDateToContributions(
    flattenedContributions,
    getEndDate(year)
  )

  const filteredContributions = datedContributions.filter(
    (contribution) => contribution.value > 0
  )

  return {
    contributionCount,
    contributions: filteredContributions,
  }
}

const flattenContributions = (contributions) => {
  let contributionCount = 0
  const flattenedContributions = contributions.flatMap((week) =>
    week.days.map((day) => {
      contributionCount += day.count
      return { value: day.count }
    })
  )
  return { flattenedContributions, contributionCount }
}

const getEndDate = (year) => {
  if (year === "current") return new Date()
  return new Date(year, 11, 31)
}

const addDateToContributions = (contributions, endDate) => {
  contributions.reverse().forEach((contribution, idx) => {
    const currentDate = new Date(endDate)
    currentDate.setDate(currentDate.getDate() - idx)
    contribution.day = currentDate.toISOString().split("T")[0]
  })
  return contributions
}

export default useGithubActivity
