import {
  Box,
  ButtonBase,
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
  Typography,
} from "@mui/material"
import { useWeatherContext } from "../../contexts/WeatherContext"

const WeatherPreferences = () => {
  const {
    showCurrentDetails,
    toggleShowCurrentDetails,
    showHourlyForecast,
    toggleShowHourlyForecast,
    showDailyForecast,
    toggleShowDailyForecast,
    isFahrenheit,
    toggleIsFahrenheit,
  } = useWeatherContext()

  return (
    <Paper>
      <Box display="flex" flexDirection={"column"} gap={1} padding={2}>
        <Typography variant="caption" color="textSecondary">
          Weather preferences
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                color="success"
                checked={showCurrentDetails}
                onChange={toggleShowCurrentDetails}
              />
            }
            disableTypography
            label={<Typography variant="body2">Current details</Typography>}
          />
          <FormControlLabel
            control={
              <Switch
                color="success"
                checked={showHourlyForecast}
                onChange={toggleShowHourlyForecast}
              />
            }
            disableTypography
            label={<Typography variant="body2">Hourly forecast</Typography>}
          />
          <FormControlLabel
            control={
              <Switch
                color="success"
                checked={showDailyForecast}
                onChange={toggleShowDailyForecast}
              />
            }
            disableTypography
            label={<Typography variant="body2">Daily forecast</Typography>}
          />
        </FormGroup>
        <ButtonBase
          disableRipple
          sx={{ justifyContent: "start", width: "min-content" }}
          onClick={toggleIsFahrenheit}
        >
          <Box display="flex" gap={1}>
            <Typography
              variant="body1"
              color={isFahrenheit ? "action.disabled" : "textPrimary"}
            >
              °C
            </Typography>
            <Typography variant="body1">/</Typography>
            <Typography
              variant="body1"
              color={isFahrenheit ? "textPrimary" : "action.disabled"}
            >
              °F
            </Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Paper>
  )
}

export default WeatherPreferences
