import { Typography } from "@mui/material";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";

import toPercent from "../../../utils/toPercent";

const Pop = ({ pop }) => {
  console.log(pop);

  return (
    <Typography
      component="div"
      variant="caption"
      color="primary"
      gap={0.5}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <OpacityRoundedIcon fontSize="inherit" />
      {toPercent(pop)}
    </Typography>
  );
};

export default Pop;
