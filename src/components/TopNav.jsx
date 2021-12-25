import { useTheme } from "@emotion/react";
import {
  Divider,
  Box,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  useMediaQuery,
} from "@mui/material";
import GrassboxIcon from ".././assets/GrassboxIcon.svg";

const TopNav = ({ toggleOpen }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <AppBar position="fixed" variant="outlined">
      <Toolbar>
        {/* Header */}
        <Box display="flex" alignItems="center" gap="1rem" sx={{ paddingX: 2 }}>
          <IconButton
            aria-label="open side navigation"
            onClick={toggleOpen}
            edge="start"
            disabled={!isSmall}
          >
            <GrassboxIcon />
          </IconButton>
          {!isSmall && <Typography variant={"h5"}>grassbox</Typography>}
        </Box>
        <Divider />
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
