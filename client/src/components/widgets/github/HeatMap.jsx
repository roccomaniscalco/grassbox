import { useTheme } from "@emotion/react"
import { TimeRange } from "@nivo/calendar"
import { array } from "prop-types"

const HeatMap = ({ data }) => {
  const theme = useTheme()

  const colors = ["#41ab5d", "#238b45", "#006d2c", "#00441b"]

  return (
    <TimeRange
      data={data}
      from={data[0].day}
      to={data[data.length - 1].day}
      margin={{ top: 40, right: 15, bottom: 20, left: 20 }}
      dayRadius={2}
      daySpacing={4}
      dayBorderWidth={0}
      emptyColor={theme.palette.divider}
      colors={colors.reverse()}
      height={170}
      width={920}
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
