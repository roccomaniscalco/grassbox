import useSWR from "swr"
import fetcher from "../../utils/fetcher"

const getDaysOfYear = (year) => {
  const daysOfYear = []

  for (
    const date = new Date(year, 0, 1);
    date <= new Date(year, 11, 31);
    date.setDate(date.getDate() + 1)
  ) {
    // format date as yyyy-mm-dd
    daysOfYear.push(date.toISOString().split("T")[0])
  }

  return daysOfYear
}

const formatContributions = (contributions, year) => {
  const daysOfYear = getDaysOfYear(year)
  let totalContributions = 0

  const formattedContributions = contributions.flatMap((week) =>
    week.days.map((day) => {
      totalContributions += day.count
      return {
        value: day.count,
        day: daysOfYear.shift(),
      }
    })
  )

  const filteredContributions = formattedContributions.filter(
    (contribution) => contribution.value > 0
  )

  return {
    totalContributions,
    contributions: filteredContributions,
  }
}

const fetchGithubActivity = async (url) => {
  const res = await fetcher(url)
  const { totalContributions, contributions } = formatContributions(
    res.contributions,
    res.year
  )

  return {
    ...res,
    contributions,
    totalContributions,
  }
}

const useGithubActivity = (username) => {
  const { data, error } = useSWR(
    `/api/github/activity/${username}/${2021}`,
    fetchGithubActivity
  )

  return { activity: data, error }
}

export default useGithubActivity
