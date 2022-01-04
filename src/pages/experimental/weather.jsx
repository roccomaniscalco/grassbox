import { Box } from "@mui/material";
import { WeatherProvider } from "../../components/contexts/WeatherContext";
import WeatherWidget from "../../components/widgets/weather/WeatherWidget";

const weather = () => {
  return (
    <Box>
      <WeatherProvider>
        <WeatherWidget />
      </WeatherProvider>
    </Box>
  );
};

export default weather;
