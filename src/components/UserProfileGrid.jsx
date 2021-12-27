import { Grid } from "@mui/material";
import UserProfile from "./UserProfile";

const UserProfileGrid = ({ users }) => {
  return (
    <Grid container spacing={3} justifyContent="center" maxWidth="1500px">
      {users.map((user) => (
        <Grid item key={user.login.uuid}>
          <UserProfile user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserProfileGrid;
