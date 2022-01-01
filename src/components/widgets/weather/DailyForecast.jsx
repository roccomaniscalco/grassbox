import {
  Box,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import ScrollBox from "../../styled/ScrollBox";
import Temp from "./Temperature";
import WeatherIcon from "./WeatherIcon";

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    weekday: "long",
  });

  return formatter.format(date);
};

const DailyForecast = ({ weather }) => {
  if (!weather)
    return (
      <Stack justifyContent="space-between" height="210px" p={2}>
        <Skeleton animation="wave" variant="text" />
        <Skeleton animation="wave" variant="text" />
        <Skeleton animation="wave" variant="text" />
        <Skeleton animation="wave" variant="text" />
        <Skeleton animation="wave" variant="text" />
      </Stack>
    );

  return (
    <TableContainer component={ScrollBox}>
      <Box minWidth="400px">
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
                      <strong>
                        <Temp>{day.temp.max.toFixed()}</Temp>
                      </strong>
                    </Typography>
                    <Typography color="textSecondary"> / </Typography>
                    <Typography color="textSecondary">
                      <Temp>{day.temp.min.toFixed()}</Temp>
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
