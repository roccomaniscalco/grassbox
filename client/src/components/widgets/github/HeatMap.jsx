import { useTheme } from "@emotion/react"
import { Box, Skeleton } from "@mui/material"
import { TimeRange } from "@nivo/calendar"
import { array } from "prop-types"
import { useRef } from "react"
import api from "../../../hooks/api"
import ErrorIndicator from "../../common/ErrorIndicator"
import { useGithubContext } from "../../contexts/GithubContext"
import ScrollBox from "../../styled/ScrollBox"
import HeatMapDayAxis from "./HeatMapDayAxis"
import HeatMapTooltip from "./HeatMapTooltip"

const HeatMap = () => {
  const theme = useTheme()
  const { username } = useGithubContext()
  const { activity, error } = api.useGithubActivity(username)
  const heatMapRef = useRef()

  const colors = ["#00441b", "#006d2c", "#238b45", "#41ab5d"]

  if (error)
    return (
      <Box height={135} m={2}>
        <ErrorIndicator message="Failed to load Github contributions" />
      </Box>
    )

  if (!activity)
    return (
      <Box display="flex">
        <HeatMapDayAxis />
        <Skeleton
          variant="rectangular"
          height={135}
          width="100%"
          sx={{ margin: 2 }}
        />
      </Box>
    )

  return (
    <Box display="flex">
      <HeatMapDayAxis />
      <ScrollBox direction="rtl" ref={heatMapRef}>
        <TimeRange
          data={activity.contributions}
          from={`${activity.year}-01-01`}
          to={`${activity.year}-12-31`}
          margin={{ top: 40, right: 10, bottom: 10, left: 10 }}
          dayRadius={2}
          dayBorderWidth={5}
          dayBorderColor={theme.palette.background.default}
          emptyColor={theme.palette.action.hover}
          colors={colors}
          height={169}
          width={890}
          weekdayTicks={[]}
          weekdayLegendOffset={0}
          tooltip={({ value, date }) => (
            <HeatMapTooltip value={value} date={date} heatMapRef={heatMapRef} />
          )}
          theme={{
            background: theme.palette.background.default,
            textColor: theme.palette.text.secondary,
            tooltip: {
              container: {
                background: theme.palette.background.default,
                color: theme.palette.text.secondary,
                fontSize: theme.typography.body1,
              },
            },
          }}
        />
      </ScrollBox>
    </Box>
  )
}

HeatMap.propTypes = {
  data: array,
}

export default HeatMap
