import { useTheme } from "@emotion/react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar, Box, Divider, IconButton, styled, Toolbar, useMediaQuery
} from "@mui/material";
import { func } from "prop-types";

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
          background: `${theme.palette.background.default}99`,
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar>
          {isSmall && (
            <IconButton
              aria-label="open side navigation"
              onClick={toggleOpen}
              disabled={!isSmall}
              sx={{ ml: "-2px", mr: 3 }}
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
          <Divider />
        </Toolbar>
        <Divider />
      </AppBar>
      <HeaderOffset />
    </>
  );
};

Header.propTypes = {
  toggleOpen: func.isRequired
}

export default Header;
