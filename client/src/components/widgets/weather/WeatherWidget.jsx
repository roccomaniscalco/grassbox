import { Card, CardContent, Collapse, Divider } from "@mui/material"
import { TransitionGroup } from "react-transition-group"
import api from "../../../hooks/api"
import ErrorIndicator from "../../common/ErrorIndicator"
import WidgetContainer from "../../common/WidgetContainer"
import { useWeatherContext } from "../../contexts/WeatherContext"
import CurrentDetails from "./CurrentDetails"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import LocaleHeader from "./LocaleHeader"
import WeatherPreferences from "./WeatherPreferences"

const WeatherWidget = () => {
  const { showCurrentDetails, showHourlyForecast, showDailyForecast, locale } =
    useWeatherContext()
  const { error } = api.useWeather(locale?.lat, locale?.lon)

  if (error)
    return (
      <Card variant="outlined">
        <CardContent>
          <ErrorIndicator message="Failed to retrieve weather data" />
        </CardContent>
      </Card>
    )

  return (
    <WidgetContainer PreferencesPanel={WeatherPreferences}>
      <Card variant="outlined">
        <LocaleHeader />
        <TransitionGroup>
          {showCurrentDetails && (
            <Collapse in>
              <CurrentDetails />
            </Collapse>
          )}
          {showHourlyForecast && (
            <Collapse in>
              <Divider />
              <HourlyForecast />
            </Collapse>
          )}
          {showDailyForecast && (
            <Collapse in>
              <Divider />
              <DailyForecast />
            </Collapse>
          )}
        </TransitionGroup>
      </Card>
    </WidgetContainer>
  )
}

export default WeatherWidget
