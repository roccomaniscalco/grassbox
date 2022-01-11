import api from "../../hooks/api"
import ErrorIndicator from "../common/ErrorIndicator"

const Index = () => {
  const { activity, error } = api.useGithubActivity("roccomaniscalco", 2020)

  if (error) return <ErrorIndicator />
  if (activity) return <div>{JSON.stringify(activity)}</div>
  return <div>loading...</div>
}

export default Index
