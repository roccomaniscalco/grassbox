import LocaleInput from "../components/widgets/weather/LocaleInput";
import { WeatherProvider } from "../contexts/WeatherContext";

const Index = () => {
  return (
    <WeatherProvider>
      <LocaleInput />
    </WeatherProvider>
  );
};

export default Index;
