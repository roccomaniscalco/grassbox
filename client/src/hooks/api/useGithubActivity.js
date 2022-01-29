import useSWR from "swr"
import fetcher from "../../utils/fetcher"

const useGithubActivity = (username, year = "current") => {
  const { data, error } = useSWR(
    `/api/github/activity/${username}/${year}`,
    fetchGithubActivity
  )

  return { activity: data, error }
}

const fetchGithubActivity = async (url) => {
  const res = await fetcher(url)
  const endDate = getEndDate(res.year)

  const { flattenedContributions, contributionCount } = flattenContributions(
    res.contributions
  )
  const datedContributions = addDatesToContributions(
    flattenedContributions,
    endDate
  )
  const filteredContributions = datedContributions.filter(
    (contribution) => contribution.value > 0
  )

  return {
    ...res,
    contributions: filteredContributions,
    contributionCount,
    startDate: datedContributions[0].day.replaceAll("-", "/"),
    endDate: endDate.toISOString().split("T")[0].replaceAll("-", "/"),
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

const addDatesToContributions = (contributions, endDate) => {
  contributions.reverse().forEach((contribution, idx) => {
    const currentDate = new Date(endDate)
    currentDate.setDate(currentDate.getDate() - idx)
    contribution.day = currentDate.toISOString().split("T")[0]
  })
  return contributions.reverse()
}

export default useGithubActivity
