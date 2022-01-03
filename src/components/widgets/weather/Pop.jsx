import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import { Typography } from "@mui/material";
import toPercent from "../../../utils/toPercent";


const Pop = ({ children }) => {
  return (
    <Typography
      component="div"
      variant="caption"
      color="primary"
      gap={0.5}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <OpacityRoundedIcon fontSize="inherit" />
      {toPercent(children)}
    </Typography>
  );
};

export default Pop;
