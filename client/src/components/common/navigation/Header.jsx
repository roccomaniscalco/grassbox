import { useTheme } from "@emotion/react"
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import { func } from "prop-types"
import { useColorMode } from "../../contexts/ColorModeContext"

const HeaderOffset = styled(Box)(({ theme }) => theme.mixins.toolbar)

const Header = ({ toggleOpen }) => {
  const theme = useTheme()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"))
  const { mode, toggleColorMode } = useColorMode()

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        style={{
          background: theme.palette.background.default,
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar>
          {isSmall && (
            <IconButton
              aria-label="open side navigation"
              onClick={toggleOpen}
              sx={{ ml: "-2px", mr: 3 }}
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
          <Stack flexDirection="row" justifyContent="end" width="100%">
            <IconButton
              aria-label="toggle between color mode"
              onClick={toggleColorMode}
            >
              {mode === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
            </IconButton>
          </Stack>
          <Divider />
        </Toolbar>
        <Divider />
      </AppBar>
      <HeaderOffset />
    </>
  )
}

Header.propTypes = {
  toggleOpen: func.isRequired,
}

export default Header
