import useSWRImmutable from "swr/immutable"
import fetcher from "../../utils/fetcher"

const useGithubActivity = (username) => {
  const { data, error } = useSWRImmutable(
    `/api/github/activity/${username}`,
    fetcher
  )

  return { activity: data, error }
}

export default useGithubActivity
