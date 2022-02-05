import { Box, CardContent, Skeleton, Typography } from "@mui/material"
import { useWeatherContext } from "../../contexts/WeatherContext"
import LocaleInput from "./LocaleInput"
import Temp from "./Temp"
import WeatherIcon from "./WeatherIcon"
import api from "../../../hooks/api"

const formatDate = (date, timeZone) => {
  const options = {
    timeZone,
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }

  const formatter = new Intl.DateTimeFormat([], options)
  return formatter.format(date)
}

const LocaleHeader = () => {
  const { locale } = useWeatherContext()
  const { weather } = api.useWeather(locale?.lat, locale?.lon)

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
      <Box width="100%">
        <Typography variant="caption" color="success.main">
          {weather ? formatDate(Date.now(), weather.timezone) : <Skeleton />}
        </Typography>
        <LocaleInput />
      </Box>
      {/* current temperature */}
      <Box display="flex" alignItems="center">
        {weather ? (
          <WeatherIcon
            icon={weather.current.weather[0].icon}
            alt={weather.current.weather[0].description}
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
  )
}

export default LocaleHeader
