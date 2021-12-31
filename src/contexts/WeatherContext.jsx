import { createContext, useContext, useState } from "react";
import useToggle from "../hooks/useToggle";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [showCurrentDetails, toggleShowCurrentDetails] = useToggle(false);
  const [showHourlyForecast, toggleShowHourlyForecast] = useToggle(true);
  const [showDailyForecast, toggleShowDailyForecast] = useToggle(true);
  const [isFahrenheit, toggleIsFahrenheit] = useToggle(false);
  const [location, setLocation] = useState("Atlanta");

  const weatherValue = {
    showCurrentDetails,
    toggleShowCurrentDetails,
    showHourlyForecast,
    toggleShowHourlyForecast,
    showDailyForecast,
    toggleShowDailyForecast,
    isFahrenheit,
    toggleIsFahrenheit,
    location,
    setLocation,
  };

  return (
    <WeatherContext.Provider value={weatherValue}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => useContext(WeatherContext);

export { WeatherProvider, useWeatherContext };
