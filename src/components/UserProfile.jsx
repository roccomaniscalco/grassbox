import {
  Avatar,
  Card,
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

import UserMapContainer from "./UserMapContainer";

const UserProfile = ({ user }) => {
  return (
    <Card elevation={2} sx={{ height: "380px", width: "330px" }}>
      {/* public info */}
      <CardHeader
        avatar={<Avatar src={user.picture.medium} />}
        title={`${user.name.first} ${user.name.last}`}
        subheader={user.email}
      />
      {/* geographic location */}
      <CardMedia sx={{ height: "200px" }}>
        <UserMapContainer city={user.location.city} />
      </CardMedia>
      {/* login credentials */}
      <CardContent>
        <TableContainer elevation={4}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    Username
                  </Typography>
                </TableCell>
                <TableCell>
                  <code>{user.login.username}</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    Password
                  </Typography>
                </TableCell>
                <TableCell>
                  <code>{user.login.password}</code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
