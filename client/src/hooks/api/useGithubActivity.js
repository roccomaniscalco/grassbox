import useSWRImmutable from "swr/immutable"
import fetcher from "../../utils/fetcher"

const useGithubActivity = (username, year = "current") => {
  const { data, error } = useSWRImmutable(
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
    from: getFrom(datedContributions),
    to: getTo(datedContributions),
  }
}

const getEndDate = (year) => {
  if (year === "current") return new Date()
  return new Date(year, 11, 31)
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

const addDatesToContributions = (contributions, endDate) => {
  contributions.reverse().forEach((contribution, idx) => {
    const currentDate = new Date(endDate)
    currentDate.setDate(currentDate.getDate() - idx)
    contribution.day = currentDate.toISOString().split("T")[0]
  })
  return contributions.reverse()
}

const getTo = (datedContributions) => {
  const lastContributionDay =
    datedContributions[datedContributions.length - 1].day
  const to = lastContributionDay.replaceAll("-", "/")
  return to
}

const getFrom = (datedContributions) =>
  datedContributions[0].day.replaceAll("-", "/")

export default useGithubActivity
