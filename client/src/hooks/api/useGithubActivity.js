import useSWRImmutable from "swr/immutable"
import fetcher from "../../utils/fetcher"

const formatContributions = (contributions) => {
  return contributions.map((week) => week.days.map((day) => day.count))
}

const useGithubActivity = (username, year) => {
  const { data, error } = useSWRImmutable(
    `/api/github/activity/${username}/${year}`,
    fetcher
  )

  return {
    activity: data && {
      ...data,
      contributions: formatContributions(data.contributions),
    },
    error,
  }
}

export default useGithubActivity
