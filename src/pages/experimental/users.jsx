import { Box } from "@mui/system";
import UserCardsGrid from "../../components/experimental/users/UserCardsGrid";

const Users = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
      <UserCardsGrid />
    </Box>
  );
};

export default Users;
