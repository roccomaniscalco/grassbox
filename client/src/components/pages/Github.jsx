import api from "../../hooks/api"
import ErrorIndicator from "../common/ErrorIndicator"

const Github = () => {
  const { activity, error } = api.useGithubActivity("roccomaniscalco", 2020)

  if (error) return <ErrorIndicator />
  if (activity) return <div>{JSON.stringify(activity, null, 20)}</div>
  return <div>loading...</div>
}

export default Github