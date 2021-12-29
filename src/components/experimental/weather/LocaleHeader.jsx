import Image from "next/image";
import { Box, CardContent, Typography } from "@mui/material";

const formatDate = (date, timeZone) => {
  const options = {
    timeZone,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat([], options);
  return formatter.format(date);
};

const LocaleHeader = ({ city, state, country, weather }) => {
  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "center",
        py: 1,
      }}
    >
      <Box>
        <Typography variant="caption" color="success.main">
          {formatDate(new Date(Date.now()), weather.timezone)}
        </Typography>
        <Typography variant="body1">
          {city}, {state ? state : country}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Image
          src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
          layout="fixed"
          width="60px"
          height="60px"
        />

        <Typography variant="h3">{weather.current.temp.toFixed()}°F</Typography>
      </Box>
    </CardContent>
  );
};

export default LocaleHeader;