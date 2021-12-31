import { useState } from "react";
import { Card, Divider } from "@mui/material";

import useWeather from "../../../hooks/useWeather";
import ErrorIndicator from "../../common/ErrorIndicator";
import LoadingIndicator from "../../common/LoadingIndicator";
import useGeocoding from "../../../hooks/useGeocoding";
import LocaleHeader from "./LocaleHeader";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import WidgetContainer from "../../common/WidgetContainer";
import WeatherPreferences from "./WeatherPreferences";

const WeatherWidget = () => {
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
        <LocaleHeader
          city={location.name}
          state={location.state}
          country={location.country}
          weather={weather}
        />
        <Divider />
        <HourlyForecast weather={weather} />
        <Divider />
        <DailyForecast weather={weather} />
      </Card>
    </WidgetContainer>
  );
};

export default WeatherWidget;
