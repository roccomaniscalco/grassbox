import { Map, ZoomControl } from "pigeon-maps";

const UserMap = ({ latitude, longitude, log }) => {
  return (
    <Map
      defaultCenter={[latitude, longitude]}
      defaultZoom={13}
      mouseEvents={false}
    >
      <ZoomControl />
    </Map>
  );
};

export default UserMap;
