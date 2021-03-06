import { Grid } from "@mui/material"
import api from "../../../hooks/api"
import ErrorIndicator from "../../common/ErrorIndicator"
import LoadingIndicator from "../../common/LoadingIndicator"
import UserCard from "./UserCard"

const UserCardsGrid = () => {
  const { users, error } = api.useRandomUsers(24)

  if (error) return <ErrorIndicator message="Failed to load user" />
  if (!users) return <LoadingIndicator />

  return (
    <Grid container spacing={3} justifyContent="center" maxWidth="1500px">
      {users.map((user) => (
        <Grid item key={user.login.uuid}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserCardsGrid
