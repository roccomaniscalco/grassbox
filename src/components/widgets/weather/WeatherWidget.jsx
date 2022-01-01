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
import CurrentDetails from "./CurrentDetails";

const WeatherWidget = () => {
  const { showCurrentDetails, showHourlyForecast, showDailyForecast, locale } =
    useWeatherContext();
  const { weather, error } = useWeather(locale?.lat, locale?.lon);

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
        <TransitionGroup>
          {showCurrentDetails && (
            <Collapse in>
              <CurrentDetails weather={weather} />
            </Collapse>
          )}
          {showHourlyForecast && (
            <Collapse in>
              <Divider />
              <HourlyForecast weather={weather} />
            </Collapse>
          )}
          {showDailyForecast && (
            <Collapse in>
              <Divider />
              <DailyForecast weather={weather} />
            </Collapse>
          )}
        </TransitionGroup>
      </Card>
    </WidgetContainer>
  );
};

export default WeatherWidget;
