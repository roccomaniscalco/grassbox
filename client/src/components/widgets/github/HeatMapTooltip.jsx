import { Box, Paper, Typography } from "@mui/material"
import { object, oneOf, string } from "prop-types"

const translatePercent = (position) => {
  if (position === "left") return "50%"
  if (position === "middle") return "0%"
  if (position === "right") return "-50%"
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

const HeatMapTooltip = ({ value, date, pos }) => {

  return (
    <Box sx={{ transform: `translate(${translatePercent(pos)})` }}>
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
  pos: oneOf(["left", "middle", "right"])
}

export default HeatMapTooltip
