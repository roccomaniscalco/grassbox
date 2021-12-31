import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import UserMap from "./UserMap";

const UserCard = ({ user }) => {
  return (
    <Card elevation={2} sx={{ height: "447px", width: "330px" }}>
      {/* public info */}
      <CardHeader
        avatar={<Avatar src={user.picture.medium} />}
        title={`${user.name.first} ${user.name.last}`}
        subheader={user.email}
      />
      {/* geographic location */}
        <UserMap city={user.location.city} />
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

export default UserCard;