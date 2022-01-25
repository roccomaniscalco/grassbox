import { Box, Paper, Typography } from "@mui/material"
import { object, string } from "prop-types"
import { useEffect } from "react"
import useNodeMeasurements from "../../../hooks/useNodeMeasurements"

const translatePercent = (position) => {
  if (position === "left") return "40%"
  if (position === "middle") return "0%"
  if (position === "right") return "-40%"
}

const formatDate = (date) => {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }

  const formatter = new Intl.DateTimeFormat([], options)
  return formatter.format(date)
}

const HeatMapTooltip = ({ value, date, heatMapRef }) => {
  const { nodeRef, cursor, cleanUp } = useNodeMeasurements()

  useEffect(() => {
    nodeRef(heatMapRef.current)
    return () => cleanUp()
  }, [nodeRef])

  if (!cursor.pos) return null

  return (
    <Box sx={{ transform: `translate(${translatePercent(cursor.pos)})` }}>
      <Paper variant="outlined">
        <Box sx={{ direction: "ltr" }} p={1}>
          <Typography variant="body2" color="textPrimary" noWrap>
            <strong>
              {value} {value === 1 ? "contribution" : "contributions"}
            </strong>{" "}
            on {formatDate(date)}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

HeatMapTooltip.propTypes = {
  value: string,
  date: object,
  heatMapRef: object,
}

export default HeatMapTooltip
