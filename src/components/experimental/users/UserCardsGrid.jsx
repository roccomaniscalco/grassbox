import { Grid } from "@mui/material";
import DataContainer from "../../data/DataContainer";
import UserCard from "./UserCard";

const UserCardsGrid = () => {
  return (
    <DataContainer
      endpoint={`https://randomuser.me/api/?nat=us&results=24`}
      render={({ results: users }) => (
        <Grid container spacing={3} justifyContent="center" maxWidth="1500px">
          {users.map((user) => (
            <Grid item key={user.login.uuid}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    />
  );
};

export default UserCardsGrid;
