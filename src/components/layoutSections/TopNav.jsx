import { useTheme } from "@emotion/react";
import {
  Divider,
  Box,
  Toolbar,
  AppBar,
  styled,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const HeaderOffset = styled(Box)(({ theme }) => theme.mixins.toolbar);

const Header = ({ toggleOpen }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: `${theme.palette.background.paper}99`,
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open side navigation"
            onClick={toggleOpen}
            disabled={!isSmall}
            sx={{ ml: "-2px", mr: 3 }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Divider />
        </Toolbar>
        <Divider />
      </AppBar>
      <HeaderOffset />
    </>
  );
};

export default Header;
