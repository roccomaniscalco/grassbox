import { Typography } from "@mui/material";
import { useWeatherContext } from "../../../contexts/WeatherContext";

const formatTemp = (temp, isFahrenheit) => {
  if (isFahrenheit) return `${((temp - 273.15) * (9 / 5) + 32).toFixed()}°F`;
  return `${(temp - 273.15).toFixed()}°C`;
};

const Temp = ({ children }) => {
  const { isFahrenheit } = useWeatherContext();

  return <>{formatTemp(children, isFahrenheit)}</>;
};

export default Temp;
