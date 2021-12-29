import {
  CardContent,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import Image from "next/image";
import ScrollBox from "../../styled/ScrollBox";
import Pop from "./Pop";

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    weekday: "long",
  });

  return formatter.format(date);
};

const DailyForecast = ({ weather }) => {
  return (
    <CardContent component={ScrollBox} sx={{ pb: 0 }}>
      <List disablePadding sx={{ display: "flex", alignItems: "center" }}>
        {/* display 6 day forecast */}
        {weather.daily.map((day) => (
          <ListItem disablePadding key={day.dt} sx={{ display: "flex", mr: 1 }}>
            {/* icon */}
            <Image
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
              layout="fixed"
              width="40px"
              height="40px"
            />
            <Box
              pr={3}
              height="60px"
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {/* weekday */}
              <Typography variant="body2">
                {formatDate(new Date(day.dt * 1000), weather.timezone)}
              </Typography>
              {/* probability of precipitation */}
              {day.pop > 0 && <Pop pop={day.pop} />}
              <Box display="flex" gap={2}>
                {/* max and min temperature */}
                <Typography variant="body2">
                  <strong>{day.temp.max.toFixed()}°</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {day.temp.min.toFixed()}°
                </Typography>
              </Box>
            </Box>
            <Divider flexItem orientation="vertical" />
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
};

export default DailyForecast;
