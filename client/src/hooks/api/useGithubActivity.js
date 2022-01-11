import useSWRImmutable from "swr/immutable"
import fetcher from "../../utils/fetcher"

const useGithubActivity = (username, year) => {
  const { data, error } = useSWRImmutable(
    `/api/github/activity/${username}/${year}`,
    fetcher
  )

  return { activity: data, error }
}

export default useGithubActivity
