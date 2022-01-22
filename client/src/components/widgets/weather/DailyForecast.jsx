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
} from "@mui/material"
import api from "../../../hooks/api"
import { useWeatherContext } from "../../contexts/WeatherContext"
import ScrollBox from "../../styled/ScrollBox"
import Temp from "./Temp"
import WeatherIcon from "./WeatherIcon"

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    weekday: "long",
  })

  return formatter.format(date)
}

const DailyForecast = () => {
  const { locale } = useWeatherContext()
  const { weather } = api.useWeather(locale?.lat, locale?.lon)

  if (!weather)
    return (
      <Stack justifyContent="space-between" height="210px" p={2}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Stack>
    )

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
                      icon={day.weather[0].icon}
                      alt={day.weather[0].description}
                      width="30px"
                      height="30px"
                    />
                    <Typography>
                      <strong>
                        <Temp>{day.temp.max}</Temp>
                      </strong>
                    </Typography>
                    <Typography color="textSecondary"> / </Typography>
                    <Typography color="textSecondary">
                      <Temp>{day.temp.min}</Temp>
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
  )
}

export default DailyForecast
