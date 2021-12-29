import { Box } from "@mui/material";
import WeatherWidget from "../../components/experimental/weather/WeatherWidget";

const weather = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
      <WeatherWidget />
    </Box>
  );
};

export default weather;
