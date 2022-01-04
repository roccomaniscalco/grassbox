import { useWeatherContext } from "../../contexts/WeatherContext"

const formatTemp = (temp, isFahrenheit) => {
  if (isFahrenheit) return Math.round((temp - 273.15) * (9 / 5) + 32)
  return Math.round(temp - 273.15)
}

const Temp = ({ children }) => {
  const { isFahrenheit } = useWeatherContext()

  return formatTemp(children, isFahrenheit) + "°"
}

export default Temp
