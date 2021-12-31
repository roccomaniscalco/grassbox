import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import ScrollBox from "../../styled/ScrollBox";
import WeatherIcon from "./WeatherIcon";

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    weekday: "long",
  });

  return formatter.format(date);
};

const DailyForecast = ({ weather }) => {
  console.log(weather);

  return (
    <TableContainer component={ScrollBox}>
      <Box minWidth={"350px"}>
        <Table size="small">
          <TableBody>
            {weather.daily.slice(0, 5).map((day) => (
              <TableRow hover key={day.dt} sx={{ "& td": { border: 0 } }}>
                <TableCell align="left">
                  <Typography variant="body2">
                    {formatDate(day.dt * 1000, weather.timezone)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    display="flex"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    maxWidth={"140px"}
                  >
                    <WeatherIcon
                      iconCode={day.weather[0].icon}
                      width="30px"
                      height="30px"
                    />
                    <Typography>
                      <strong>{day.temp.max.toFixed()}°</strong>
                    </Typography>
                    <Typography color="textSecondary"> / </Typography>
                    <Typography color="textSecondary">
                      {day.temp.min.toFixed()}°
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="caption" color="textSecondary">
                    {day.weather[0].description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default DailyForecast;
