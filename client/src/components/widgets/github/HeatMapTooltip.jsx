import { Box, Paper, Typography } from "@mui/material"
import { number, object } from "prop-types"

const formatDate = (date) => {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }

  const formatter = new Intl.DateTimeFormat([], options)
  return formatter.format(date)
}

const HeatMapTooltip = ({ value, date }) => {
  console.log(date)

  return (
    <Paper variant="outlined">
      <Box sx={{ direction: "ltr" }} p={1}>
        <Typography variant="body2" color="textPrimary">
          <strong>{value} contributions</strong> on {formatDate(date)}
        </Typography>
      </Box>
    </Paper>
  )
}

HeatMapTooltip.propTypes = {
  value: number,
  date: object,
}

export default HeatMapTooltip
