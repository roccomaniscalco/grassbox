import { useState } from "react";
import { Card, Divider } from "@mui/material";

import useWeather from "../../../hooks/useWeather";
import ErrorIndicator from "../../data/ErrorIndicator";
import LoadingIndicator from "../../data/LoadingIndicator";
import useGeocoding from "../../../hooks/useGeocoding";
import LocaleHeader from "./LocaleHeader";
import HourlyForecast from "./HourlyForecast";

const WeatherWidget = () => {
  const [city, setCity] = useState("atlanta");

  const { location, error: locationError } = useGeocoding(city);
  const { weather, error: weatherError } = useWeather(
    location?.lat,
    location?.lon
  );

  if (locationError || weatherError)
    return <ErrorIndicator error={locationError || weatherError} />;
  if (!location || !weather) return <LoadingIndicator />;

  return (
    <Card variant="outlined" sx={{ height: "300px", width: "500px" }}>
      <LocaleHeader
        city={location.name}
        state={location.state}
        country={location.country}
        weather={weather}
      />
      <Divider />
      <HourlyForecast weather={weather} />
      <Divider />
    </Card>
  );
};

export default WeatherWidget;
