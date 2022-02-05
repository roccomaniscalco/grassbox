import { Divider, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"

const HeatMapDayAxis = () => {
  return (
    <Box display="flex">
      <Stack spacing={2} justifyContent="center" mt={2.6}  pl={2} pr={1}>
        <Typography fontSize="11px" color="textSecondary" textAlign="left">
          Mon
        </Typography>
        <Typography fontSize="11px" color="textSecondary" textAlign="left">
          Wed
        </Typography>
        <Typography fontSize="11px" color="textSecondary" textAlign="left">
          Fri
        </Typography>
      </Stack>
      <Divider orientation="vertical" />
    </Box>
  )
}

export default HeatMapDayAxis
