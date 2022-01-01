import { Box, CardContent, Skeleton, Typography } from "@mui/material";
import LocaleInput from "./LocaleInput";
import Temp from "./Temperature";

import WeatherIcon from "./WeatherIcon";

const formatDate = (date, timeZone) => {
  const options = {
    timeZone,
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat([], options);
  return formatter.format(date);
};

const LocaleHeader = ({ weather }) => {
  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        py: 1,
      }}
    >
      {/* time and location */}
      <Box>
        <Typography variant="caption" color="success.main">
          {weather ? (
            formatDate(new Date(Date.now()), weather.timezone)
          ) : (
            <Skeleton />
          )}
        </Typography>
        <LocaleInput />
      </Box>
      {/* current temperature */}
      <Box display="flex" alignItems="center">
        {weather ? (
          <WeatherIcon
            iconCode={weather.current.weather[0].icon}
            width="40px"
            height="40px"
          />
        ) : (
          <Box p={1}>
            <Skeleton variant="circular" width="40px" height="40px" />
          </Box>
        )}
        <Typography variant="h4">
          {weather ? (
            <Temp>{weather.current.temp}</Temp>
          ) : (
            <Skeleton width="60px" />
          )}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default LocaleHeader;
