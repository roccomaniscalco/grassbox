import { createContext, useContext, useState } from "react";
import useToggle from "../hooks/useToggle";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [showCurrentDetails, toggleShowCurrentDetails] = useToggle(false);
  const [showHourlyForecast, toggleShowHourlyForecast] = useToggle(true);
  const [showDailyForecast, toggleShowDailyForecast] = useToggle(true);
  const [isFahrenheit, toggleIsFahrenheit] = useToggle(false);
  const [locale, setLocale] = useState({
    name: "Atlanta",
    lat: 33.7489924,
    lon: -84.3902644,
  });

  const weatherValue = {
    showCurrentDetails,
    toggleShowCurrentDetails,
    showHourlyForecast,
    toggleShowHourlyForecast,
    showDailyForecast,
    toggleShowDailyForecast,
    isFahrenheit,
    toggleIsFahrenheit,
    locale,
    setLocale,
  };

  return (
    <WeatherContext.Provider value={weatherValue}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => useContext(WeatherContext);

export { WeatherProvider, useWeatherContext };
