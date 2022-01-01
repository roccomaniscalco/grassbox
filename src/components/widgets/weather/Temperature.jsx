import { useWeatherContext } from "../../../contexts/WeatherContext";

const formatTemp = (temp, isFahrenheit) => {
  if (isFahrenheit) return `${((temp - 273.15) * (9 / 5) + 32).toFixed()}°`;
  return `${(temp - 273.15).toFixed()}°`;
};

const Temp = ({ children }) => {
  const { isFahrenheit } = useWeatherContext();

  return formatTemp(children, isFahrenheit);
};

export default Temp;
