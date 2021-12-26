import { useTheme } from "@emotion/react";
import {
  Divider,
  Box,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  useMediaQuery,
  styled
} from "@mui/material";
import GrassboxIcon from "../../assets/GrassboxIcon.svg";

const HeaderOffset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = ({ toggleOpen }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: `${theme.palette.background.paper}95`,
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar>
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="open side navigation"
              onClick={toggleOpen}
              disabled={!isSmall}
              sx={{ ml: "-2px", mr: 2 }}
            >
              <GrassboxIcon />
            </IconButton>
            {!isSmall && <Typography variant={"h5"}>GRASSBOX</Typography>}
          </Box>
          <Divider />
        </Toolbar>
        <Divider />
      </AppBar>
      <HeaderOffset />
    </>
  );
};

export default Header;
