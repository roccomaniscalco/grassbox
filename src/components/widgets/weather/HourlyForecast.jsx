import {
  CardContent,
  Paper,
  List,
  ListItem,
  Typography,
  styled,
  Box,
} from "@mui/material";

import ScrollBox from "../../styled/ScrollBox";
import Pop from "./Pop";
import Temp from "./Temperature";
import WeatherIcon from "./WeatherIcon";

const formatDate = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    hour: "numeric",
  });

  return formatter.format(date);
};

const HourPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1, 0),
  height: "120px",
  width: "70px",
}));

const HourlyForecast = ({ weather }) => {
  return (
    <CardContent component={ScrollBox}>
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
                {formatDate(new Date(hour.dt * 1000), weather.timezone)}
              </Typography>

              {/* probability of precipitation */}
              {hour.pop > 0 && <Pop>{hour.pop}</Pop>}

              <Box position="absolute" bottom={(theme) => theme.spacing(1)}>
                {/* icon */}
                <WeatherIcon
                  iconCode={hour.weather[0].icon}
                  width="40px"
                  height="40px"
                />

                {/* temperature */}
                <Typography variant="body1" textAlign="center">
                  <strong>
                    <Temp>{hour.temp.toFixed()}</Temp>
                  </strong>
                </Typography>
              </Box>
            </HourPaper>
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
};

export default HourlyForecast;
