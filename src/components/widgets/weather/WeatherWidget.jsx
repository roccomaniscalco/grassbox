import { useState } from "react";
import { Card, Collapse, Divider } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import useWeather from "../../../hooks/useWeather";
import useGeocoding from "../../../hooks/useGeocoding";
import ErrorIndicator from "../../common/ErrorIndicator";
import LoadingIndicator from "../../common/LoadingIndicator";
import WidgetContainer from "../../common/WidgetContainer";
import LocaleHeader from "./LocaleHeader";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import WeatherPreferences from "./WeatherPreferences";
import { useWeatherContext } from "../../../contexts/WeatherContext";

const WeatherWidget = () => {
  const { showHourlyForecast, showDailyForecast } = useWeatherContext();
  const [city, setCity] = useState("belo horizonte");

  const { location, error: locationError } = useGeocoding(city);
  const { weather, error: weatherError } = useWeather(
    location?.lat,
    location?.lon
  );

  if (locationError || weatherError)
    return <ErrorIndicator error={locationError || weatherError} />;
  if (!location || !weather) return <LoadingIndicator />;

  return (
    <WidgetContainer PreferencesPanel={WeatherPreferences}>
      <Card variant="outlined">
        <LocaleHeader city={location.name} weather={weather} />
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
