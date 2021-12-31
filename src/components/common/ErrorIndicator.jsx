import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import { styled, Box, Slide, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

const CenterChild = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

const ErrorIndicator = ({ error }) => {
  return (
    <CenterChild>
      <TransitionGroup>
        <Slide>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ReportProblemRoundedIcon sx={{ fontSize: 80 }} color="error" />
            <Typography variant="h4" textAlign="center">
              {error.status}
            </Typography>
            <Typography variant="caption" color="textSecondary" textAlign="center">
              {error.message}
            </Typography>
          </Box>
        </Slide>
      </TransitionGroup>
    </CenterChild>
  );
};

export default ErrorIndicator;
