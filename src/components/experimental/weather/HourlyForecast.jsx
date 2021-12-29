import Image from "next/image";
import {
  CardContent,
  Paper,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";

import ScrollBox from "../../styled/ScrollBox";
import toPercent from "../../../utils/toPercent";
import { Box } from "@mui/system";

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
  console.log(weather);

  return (
    <CardContent component={ScrollBox}>
      <List disablePadding sx={{ display: "flex", gap: 1 }}>
        {/* display forecast of next 24 hours */}
        {weather.hourly.slice(0, 24).map((hour) => (
          <ListItem disablePadding key={hour.dt}>
            <HourPaper elevation={4}>
              {/* time */}
              <Typography variant="body2" color="textSecondary">
                {formatDate(new Date(hour.dt * 1000), weather.timezone)}
              </Typography>
              {/* probability of precipitation */}
              {hour.pop > 0 && (
                <Typography
                  component="div"
                  variant="caption"
                  color="primary"
                  textAlign="center"
                  gap={0.5}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <OpacityRoundedIcon fontSize="inherit" />{" "}
                  {toPercent(hour.pop)}
                </Typography>
              )}
              <Box position="absolute" bottom={(theme) => theme.spacing(1)}>
                {/* icon */}
                <Image
                  src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`}
                  layout="fixed"
                  width="40px"
                  height="40px"
                />
                {/* temperature */}
                <Typography variant="body1" textAlign="center">
                  <strong>{hour.temp.toFixed()}°F</strong>
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
