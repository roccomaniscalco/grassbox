import api from "../../hooks/api"
import ErrorIndicator from "../common/ErrorIndicator"
import LoadingIndicator from "../common/LoadingIndicator"
import HeatMap from "../widgets/github/HeatMap"

const Github = () => {
  const { activity, error } = api.useGithubActivity("roccomaniscalco", 2021)

  if (activity) console.log(activity)

  if (error) return <ErrorIndicator />
  if (!activity) return <LoadingIndicator />
  return <HeatMap data={activity.contributions} />
}

export default Github
