import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import UserMap from "./UserMap";

const UserProfile = ({ userData }) => {
  const user = userData.results[0];

  return (
    <>
      {/* public info */}
      <CardHeader
        avatar={<Avatar src={user.picture.medium} />}
        title={`${user.name.first} ${user.name.last}`}
        subheader={user.email}
      />
      {/* geographic location */}
      <CardMedia sx={{ height: "250px" }}>
        <UserMap coords={user.location.coordinates} />
      </CardMedia>
      {/* login credentials */}
      <CardContent>
        <TableContainer elevation={4}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>{user.login.username}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Password</TableCell>
                <TableCell>{user.login.password}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      {/* uuid */}
      <CardContent sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="caption" color="highlight" textAlign="center">
          {user.login.uuid}
        </Typography>
      </CardContent>
    </>
  );
};

export default UserProfile;
