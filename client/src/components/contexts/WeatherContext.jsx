import { node } from "prop-types"
import { createContext, useContext, useState } from "react"
import useToggle from "../../hooks/useToggle"

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [showCurrentDetails, toggleShowCurrentDetails] = useToggle(false)
  const [showHourlyForecast, toggleShowHourlyForecast] = useToggle(true)
  const [showDailyForecast, toggleShowDailyForecast] = useToggle(true)
  const [isFahrenheit, toggleIsFahrenheit] = useToggle(false)
  const [locale, setLocale] = useState({
    lat: -23.5507,
    lon: -46.6334,
    name: "São Paulo",
  })

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
  }

  return (
    <WeatherContext.Provider value={weatherValue}>
      {children}
    </WeatherContext.Provider>
  )
}

WeatherProvider.propTypes = {
  children: node,
}

const useWeatherContext = () => useContext(WeatherContext)

export { WeatherProvider, useWeatherContext }
