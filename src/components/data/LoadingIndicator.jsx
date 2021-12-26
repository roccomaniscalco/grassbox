import { CircularProgress } from "@mui/material";
import CenterChild from "../styled/CenterChild";

const LoadingIndicator = () => {
  return (
    <CenterChild>
      <CircularProgress color={"success"} size={60}/>
    </CenterChild>
  );
};

export default LoadingIndicator;
