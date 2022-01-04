import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded"
import { Box, Slide, styled, Typography } from "@mui/material"
import { string } from "prop-types"
import { TransitionGroup } from "react-transition-group"

const CenterChild = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
})

const ErrorIndicator = ({ message }) => {
  return (
    <CenterChild>
      <TransitionGroup>
        <Slide>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ReportProblemRoundedIcon sx={{ fontSize: 80 }} color="error" />
            <Typography
              variant="caption"
              color="textSecondary"
              textAlign="center"
            >
              {message}
            </Typography>
          </Box>
        </Slide>
      </TransitionGroup>
    </CenterChild>
  )
}

ErrorIndicator.propTypes = {
  message: string.isRequired,
}

export default ErrorIndicator
