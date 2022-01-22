import { Box, Card, Divider, Typography } from "@mui/material"
import api from "../../../hooks/api"
import ErrorIndicator from "../../common/ErrorIndicator"
import LoadingIndicator from "../../common/LoadingIndicator"
import WidgetContainer from "../../common/WidgetContainer"
import HeatMap from "./HeatMap"

const GithubActivityWidget = () => {
  const { activity, error } = api.useGithubActivity("roccomaniscalco", 2021)

  if (error)
    return <ErrorIndicator message="Failed to load Github contributions" />
  if (!activity) return <LoadingIndicator />

  console.log(activity)

  return (
    <Box>
      <WidgetContainer>
        <Card variant="outlined">
          <Box p={2}>
            <Typography variant="body1">{activity.username}</Typography>
          </Box>
          <Divider />

          <HeatMap data={activity.contributions} />
        </Card>
      </WidgetContainer>
    </Box>
  )
}

export default GithubActivityWidget
