import { Card, Divider } from "@mui/material"
import WidgetContainer from "../../common/WidgetContainer"
import HeatMap from "./HeatMap"
import ProfileHeader from "./ProfileHeader"

const GithubActivityWidget = () => {
  return (
    <WidgetContainer>
      <Card variant="outlined">
        <ProfileHeader />
        <Divider />
        <HeatMap />
      </Card>
    </WidgetContainer>
  )
}

export default GithubActivityWidget
