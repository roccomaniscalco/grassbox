import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
  Typography,
} from "@mui/material";

const WeatherPreferences = () => {
  return (
    <Paper>
      <Box width="200px" padding={2}>
        <Box paddingBottom={1}>
          <Typography variant="caption" color="textSecondary">
            Weather preferences
          </Typography>
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Switch color="success" />}
            disableTypography
            label={<Typography variant="body2">Current details</Typography>}
          />
          <FormControlLabel
            control={<Switch color="success" />}
            disableTypography
            label={<Typography variant="body2">Hourly forecast</Typography>}
          />
          <FormControlLabel
            control={<Switch color="success" />}
            disableTypography
            label={<Typography variant="body2">Daily forecast</Typography>}
          />
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default WeatherPreferences;
