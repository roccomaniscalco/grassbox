import DataContainer from "../../data/DataContainer";
import ErrorIndicator from "../../data/ErrorIndicator";
import UserMap from "./UserMap";

const UserMapContainer = ({ city }) => {
  const query = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

  return (
    <DataContainer
      endpoint={query}
      render={(data) =>
        data.length === 0 ? (
          <ErrorIndicator />
        ) : (
          <UserMap latitude={data[0].lat} longitude={data[0].lon} log={data} />
        )
      }
    />
  );
};
export default UserMapContainer;
