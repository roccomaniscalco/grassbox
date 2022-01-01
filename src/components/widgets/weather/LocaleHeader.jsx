import { Box, CardContent, Typography } from "@mui/material";
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

const LocaleHeader = ({ city, weather }) => {
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
          {formatDate(new Date(Date.now()), weather.timezone)}
        </Typography>
        <Typography variant="body1">{city}</Typography>
      </Box>
      {/* current temperature */}
      <Box display="flex" alignItems="center">
        <WeatherIcon
          iconCode={weather.current.weather[0].icon}
          width="40px"
          height="40px"
        />
        <Typography variant="h3">
          <Temp>{weather.current.temp}</Temp>
        </Typography>
      </Box>
    </CardContent>
  );
};

export default LocaleHeader;
