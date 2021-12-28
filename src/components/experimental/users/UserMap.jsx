import { Map, ZoomControl } from "pigeon-maps";
import { Box, Paper, CardMedia, CardContent } from "@mui/material";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";

import useGeocoding from "../../../hooks/useGeocoding";
import LoadingIndicator from "../../data/LoadingIndicator";
import ErrorIndicator from "../../data/ErrorIndicator";

const UserMap = ({ city }) => {
  const { location, error } = useGeocoding(city);

  if (error)
    return (
      <Box height="270px">
        <ErrorIndicator error={error}/>
      </Box>
    );

  if (!location)
    return (
      <Box height="270px">
        <LoadingIndicator />
      </Box>
    );

  return (
    <>
      {/* Map Header */}
      <CardContent>
        <Paper elevation={6} sx={{ whiteSpace: "nowrap" }}>
          <Box display="flex" alignItems="center" gap={1} padding={1}>
            <RoomRoundedIcon color="success" fontSize="body2" />
            <Box
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "body2.fontSize",
              }}
            >
              {location.name}, {location.state && location.state + ", "}
              {location.country}
            </Box>
          </Box>
        </Paper>
      </CardContent>
      {/* Map */}
      <CardMedia sx={{ height: "200px" }}>
        <Map
          defaultCenter={[location.lat, location.lon]}
          defaultZoom={13}
          mouseEvents={false}
        >
          <ZoomControl />
        </Map>
      </CardMedia>
    </>
  );
};

export default UserMap;
