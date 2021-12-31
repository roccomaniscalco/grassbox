import WeatherWidget from "../../components/widgets/weather/WeatherWidget";
import { WeatherProvider } from "../../contexts/WeatherContext";

const weather = () => {
  return (
    <WeatherProvider>
      <WeatherWidget />
    </WeatherProvider>
  );
};

export default weather;
