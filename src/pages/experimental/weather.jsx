import { Box } from "@mui/material";
import WeatherWidget from "../../components/widgets/weather/WeatherWidget";
import { WeatherProvider } from "../../contexts/WeatherContext";

const weather = () => {
  return (
    <Box width="420px">
      <WeatherProvider>
        <WeatherWidget />
      </WeatherProvider>
    </Box>
  );
};

export default weather;
