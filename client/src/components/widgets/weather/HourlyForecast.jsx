import {
  Box,
  List,
  ListItem,
  Paper,
  Skeleton,
  Stack,
  styled,
  Typography
} from "@mui/material"
import api from "../../../hooks/api"
import { useWeatherContext } from "../../contexts/WeatherContext"
import ScrollBox from "../../styled/ScrollBox"
import Pop from "./Pop"
import Temp from "./Temp"
import WeatherIcon from "./WeatherIcon"

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    hour: "numeric",
  })

  return formatter.format(date)
}

const HourPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1, 0),
  height: "120px",
  width: "70px",
}))

const HourlyForecast = () => {
  const { locale } = useWeatherContext()
  const { weather } = api.useWeather(locale?.lat, locale?.lon)

  if (!weather)
    return (
      <Stack
        justifyContent="space-between"
        direction="row"
        height="152px"
        spacing={1}
        p={2}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
      </Stack>
    )

  return (
    <ScrollBox p={2}>
      <List disablePadding sx={{ display: "flex", gap: 1 }}>
        {/* display forecast of next 24 hours */}
        {weather.hourly.slice(0, 24).map((hour) => (
          <ListItem
            disablePadding
            key={hour.dt}
            sx={{ "&:last-child": { pr: 2 } }}
          >
            <HourPaper variant="outlined">
              {/* time */}
              <Typography variant="body2" color="textSecondary">
                {formatDate(hour.dt * 1000, weather.timezone)}
              </Typography>

              {/* probability of precipitation */}
              {hour.pop > 0 && <Pop>{hour.pop}</Pop>}

              <Box position="absolute" bottom={(theme) => theme.spacing(1)}>
                {/* icon */}
                <WeatherIcon
                  icon={hour.weather[0].icon}
                  alt={hour.weather[0].description}
                  width="40px"
                  height="40px"
                />

                {/* temperature */}
                <Typography variant="body1" textAlign="center">
                  <strong>
                    <Temp>{hour.temp}</Temp>
                  </strong>
                </Typography>
              </Box>
            </HourPaper>
          </ListItem>
        ))}
      </List>
    </ScrollBox>
  )
}

export default HourlyForecast
