import { Map, ZoomControl } from "pigeon-maps";

const UserMap = ({ coords }) => {
  return (
    <Map defaultCenter={[coords.latitude, coords.longitude]} defaultZoom={10}>
      <ZoomControl />
    </Map>
  );
};

export default UserMap;
