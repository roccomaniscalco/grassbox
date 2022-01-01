import { Card, CardContent, Collapse, Divider } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import useWeather from "../../../hooks/useWeather";
import ErrorIndicator from "../../common/ErrorIndicator";
import WidgetContainer from "../../common/WidgetContainer";
import LocaleHeader from "./LocaleHeader";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import WeatherPreferences from "./WeatherPreferences";
import { useWeatherContext } from "../../../contexts/WeatherContext";

const WeatherWidget = () => {
  const { showHourlyForecast, showDailyForecast, locale } = useWeatherContext();
  const { weather, error } = useWeather(locale?.lat, locale?.lon);

  console.log(locale)

  if (error)
    return (
      <Card variant="outlined">
        <CardContent>
          <ErrorIndicator error={error} />
        </CardContent>
      </Card>
    );

  return (
    <WidgetContainer PreferencesPanel={WeatherPreferences}>
      <Card variant="outlined">
        <LocaleHeader city={locale.name} weather={weather} />
        <Divider />
        <TransitionGroup>
          {showHourlyForecast && (
            <Collapse in>
              <HourlyForecast weather={weather} />
              <Divider />
            </Collapse>
          )}
          {showDailyForecast && (
            <Collapse in>
              <DailyForecast weather={weather} />
            </Collapse>
          )}
        </TransitionGroup>
      </Card>
    </WidgetContainer>
  );
};

export default WeatherWidget;
