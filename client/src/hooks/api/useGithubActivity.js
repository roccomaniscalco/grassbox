import useSWRImmutable from "swr/immutable"
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

  const formattedContributions = contributions.flatMap((week) =>
    week.days.map((day) => ({
      value: day.count,
      day: daysOfYear.shift(),
    }))
  )

  return formattedContributions.filter((contribution) => contribution.value > 0)
}

const useGithubActivity = (username, year) => {
  const { data, error } = useSWRImmutable(
    `/api/github/activity/${username}/${year}`,
    fetcher
  )

  return {
    activity: data && {
      ...data,
      contributions: formatContributions(data.contributions, data.year),
    },
    error,
  }
}

export default useGithubActivity
