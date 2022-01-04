import useSWRImmutable from "swr/immutable"
import fetcher from "../utils/fetcher"

const useRandomUsers = (userCount) => {
  const { data, error } = useSWRImmutable(
    `https://randomuser.me/api/?results=${userCount}`,
    fetcher
  )

  return { users: data?.results, error }
}

export default useRandomUsers
