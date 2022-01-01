import useSWRImmutable from "swr/immutable";
import fetcher from "../utils/fetcher";

const exclude = ["minutely", "alerts"];

const useWeather = (lat, lon) => {
  const { data, error } = useSWRImmutable(
    lat &&
      lon &&
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude.toString()}&appid=${
        process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
      }`,
    fetcher
  );

  return { weather: data, error };
};

export default useWeather;
