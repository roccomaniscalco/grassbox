import Image from "next/image";
import {
  CardContent,
  Paper,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";

import ScrollBox from "../../styled/ScrollBox";

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    hour: "numeric",
  });

  return formatter.format(date);
};

const HourPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "90px",
  width: "60px",
});

const HourlyForecast = ({ weather }) => {
  console.log(weather);

  return (
    <CardContent component={ScrollBox}>
      <List disablePadding sx={{ display: "flex", gap: 1 }}>
        {weather.hourly.slice(0, 24).map((hour) => (
          <ListItem disablePadding key={hour.dt}>
            <HourPaper elevation={4}>
              <Typography variant="caption">
                {formatDate(new Date(hour.dt * 1000), weather.timezone)}
              </Typography>
              <Image
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`}
                layout="fixed"
                width="40px"
                height="40px"
              />
              <Typography variant="body1" textAlign="center">
                {hour.temp.toFixed()}°F
              </Typography>
            </HourPaper>
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
};

export default HourlyForecast;
