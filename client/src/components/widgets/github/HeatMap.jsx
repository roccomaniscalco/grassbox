import { useTheme } from "@emotion/react"
import { TimeRange } from "@nivo/calendar"
import { array } from "prop-types"

const HeatMap = ({ data }) => {
  const theme = useTheme()

  return (
    <TimeRange
      data={data}
      minValue={1}
      from={data[0].day}
      to={data[data.length - 1].day}
      margin={{ top: 40, right: 10, bottom: 10, left: 10 }}
      dayRadius={3}
      daySpacing={3}
      dayBorderWidth={0}
      emptyColor={theme.palette.divider}
      dayBorderColor={theme.palette.background.default}
      height={400}
      width={1100}
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
  )
}

HeatMap.propTypes = {
  data: array,
}

export default HeatMap
