import { Box, Card } from "@mui/material";
import DataContainer from "../components/data/DataContainer";
import UserProfile from "../components/UserProfile";

const Index = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Card
        elevation={2}
        sx={{ height: "510px", width: "350px" }}
      >
        <DataContainer
          endpoint="https://randomuser.me/api/?nat=us"
          render={(data) => <UserProfile userData={data} />}
        />
      </Card>
    </Box>
  );
};

export default Index;
