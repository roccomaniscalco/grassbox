import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import { TimeRange } from "@nivo/calendar"
import { array } from "prop-types"
import ScrollBox from "../../styled/ScrollBox"
import HeatMapDaySideBar from "./HeatMapDaySideBar"

const HeatMap = ({ data }) => {
  const theme = useTheme()
  const colors = ["#00441b", "#006d2c", "#238b45", "#41ab5d"]

  return (
    <Box display="flex">
      <HeatMapDaySideBar />
      <ScrollBox direction={"rtl"}>
        <TimeRange
          data={data}
          from={data[0].day}
          to={data[data.length - 1].day}
          margin={{ top: 40, right: 10, bottom: 10, left: 10 }}
          dayRadius={2}
          daySpacing={4}
          dayBorderWidth={0}
          emptyColor={theme.palette.divider}
          colors={colors}
          height={160}
          width={820}
          weekdayTicks={[]}
          weekdayLegendOffset={0}
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
