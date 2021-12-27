import { Box } from "@mui/material";
import DataContainer from "../components/data/DataContainer";
import UserProfileGrid from "../components/UserProfileGrid";

const Index = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <DataContainer
        endpoint={`https://randomuser.me/api/?nat=us&results=24`}
        render={(data) => <UserProfileGrid users={data.results} />}
      />
    </Box>
  );
};

export default Index;
