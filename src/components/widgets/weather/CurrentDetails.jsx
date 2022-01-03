import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useWeatherContext } from "../../../contexts/WeatherContext";
import useWeather from "../../../hooks/useWeather";
import isWithinRange from "../../../utils/isWithinRange";

const switchDirection = (deg) => {
  switch (true) {
    case isWithinRange(deg, 12, 33):
      return "NNE";
    case isWithinRange(deg, 34, 56):
      return "NE";
    case isWithinRange(deg, 57, 78):
      return "ENE";
    case isWithinRange(deg, 79, 101):
      return "E";
    case isWithinRange(deg, 102, 123):
      return "ESE";
    case isWithinRange(deg, 124, 146):
      return "SE";
    case isWithinRange(deg, 147, 168):
      return "SSE";
    case isWithinRange(deg, 169, 191):
      return "S";
    case isWithinRange(deg, 192, 213):
      return "SSW";
    case isWithinRange(deg, 214, 236):
      return "SW";
    case isWithinRange(deg, 237, 258):
      return "WSW";
    case isWithinRange(deg, 259, 281):
      return "W";
    case isWithinRange(deg, 282, 303):
      return "WNW";
    case isWithinRange(deg, 304, 326):
      return "NW";
    case isWithinRange(deg, 327, 348):
      return "NNW";
    default:
      return "N";
  }
};

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    hour: "numeric",
    minute: "numeric",
  });

  return formatter.format(date);
};

const CurrentDetails = () => {
  const { locale } = useWeatherContext();
  const { weather } = useWeather(locale?.lat, locale?.lon);

  if (!weather)
    return (
      <Stack height="4rem" justifyContent="space-between" pb={2} px={2}>
        <Typography variant="caption">
          <Skeleton variant="text" />
        </Typography>
        <Typography variant="caption">
          <Skeleton variant="text" />
        </Typography>
      </Stack>
    );

  return (
    <Box pt={0} px={2} pb={2}>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="caption" color="textSecondary">
            <ArrowDownwardRoundedIcon
              fontSize="inherit"
              color="success"
              sx={{
                mr: 1,
                transform: `rotate(${weather.current.wind_deg}deg)`,
              }}
            />
            {weather.current.wind_speed.toFixed(1)}m/s{" "}
            {switchDirection(weather.current.wind_deg)}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" color="textSecondary">
            Humidity: {weather.current.humidity}%
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" color="textSecondary">
            <WbSunnyRoundedIcon fontSize="inherit" sx={{ mr: 1 }} />
            {formatDate(weather.current.sunrise * 1000, weather.timezone)}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" color="textSecondary">
            <SpeedRoundedIcon fontSize="inherit" sx={{ mr: 1 }} />
            {weather.current.pressure}hPa
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" color="textSecondary">
            UV: {weather.current.uvi}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" color="textSecondary">
            <ModeNightRoundedIcon fontSize="inherit" sx={{ mr: 1 }} />
            {formatDate(weather.current.sunset * 1000, weather.timezone)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentDetails;
