import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import fetcher from "../utils/fetcher";

const useGeocoding = (city) => {
  const { data, error, isValidating } = useSWRImmutable(
    `http://api.openweathermap.org/geo/1.0/direct?limit=1&q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`,
    fetcher
  );

  const [timeoutError, setTimeoutError] = useState();

  useEffect(() => {
    if (!data?.[0] && !error && !isValidating) {
      const error = new Error("Failed to retrieve coordinates.");
      error.status = 404;
      setTimeoutError(error);
    }
  }, [data, isValidating]);

  return { location: data?.[0], error: timeoutError };
};

export default useGeocoding;
