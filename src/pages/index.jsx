import { Box, Card } from "@mui/material";
import DataContainer from "../components/data/DataContainer";

const Index = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Card
        variant="outlined"
        sx={{ height: "600px", width: "400px", bgcolor: "grey.900" }}
      >
        <DataContainer
          endpoint="https://randomuser.me/api/"
          render={(data) => <>{JSON.stringify(data)}</>}
        />
      </Card>
    </Box>
  );
};

export default Index;
