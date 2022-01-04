import { WeatherProvider } from "../contexts/WeatherContext"
import WeatherWidget from "../widgets/weather/WeatherWidget"

const Weather = () => {
  return (
    <WeatherProvider>
      <WeatherWidget />
    </WeatherProvider>
  )
}

export default Weather
