import { Grid } from "@mui/material";
import useRandomUsers from "../../../hooks/useRandomUsers";
import ErrorIndicator from "../../common/ErrorIndicator";
import LoadingIndicator from "../../common/LoadingIndicator";
import UserCard from "./UserCard";

const UserCardsGrid = () => {
  const { users, error } = useRandomUsers(24);

  if (error) return <ErrorIndicator error={error} />;
  if (!users) return <LoadingIndicator />;

  return (
    <Grid container spacing={3} justifyContent="center" maxWidth="1500px">
      {users.map((user) => (
        <Grid item key={user.login.uuid}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCardsGrid;
