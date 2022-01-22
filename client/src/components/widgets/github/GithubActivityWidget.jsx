import { Box, Card } from "@mui/material"
import api from "../../../hooks/api"
import ErrorIndicator from "../../common/ErrorIndicator"
import LoadingIndicator from "../../common/LoadingIndicator"
import WidgetContainer from "../../common/WidgetContainer"
import HeatMap from "./HeatMap"

const GithubActivityWidget = () => {
  const { activity, error } = api.useGithubActivity("roccomaniscalco", 2021)

  if (error) return <ErrorIndicator />
  if (!activity) return <LoadingIndicator />

  return (
    <Box maxWidth={920} width="100%">
      <WidgetContainer>
        <Card variant="outlined">
          <Box position="relative" height={170}>
            <Box position="absolute" right={0}>
              <HeatMap data={activity.contributions} />
            </Box>
          </Box>
        </Card>
      </WidgetContainer>
    </Box>
  )
}

export default GithubActivityWidget
