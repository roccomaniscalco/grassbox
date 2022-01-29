import { Card, Divider } from "@mui/material"
import WidgetContainer from "../../common/WidgetContainer"
import GithubPreferences from "./GithubPreferences"
import HeatMap from "./HeatMap"
import ProfileHeader from "./ProfileHeader"

const GithubActivityWidget = () => {
  return (
    <WidgetContainer PreferencesPanel={GithubPreferences}>
      <Card variant="outlined">
        <ProfileHeader />
        <Divider />
        <HeatMap />
      </Card>
    </WidgetContainer>
  )
}

export default GithubActivityWidget
