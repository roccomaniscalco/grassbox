import { DarkModeRounded, LightModeRounded } from "@mui/icons-material"
import { AppBar, Divider, IconButton, Stack, Toolbar } from "@mui/material"
import { func } from "prop-types"
import { useColorMode } from "../../contexts/ColorModeContext"
import GlassBox from "../../styled/GlassBox"

const Header = () => {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <AppBar color="transparent" style={{ boxShadow: "none" }}>
      <GlassBox>
        <Toolbar>
          <Stack flexDirection="row" justifyContent="end" width="100%">
            <IconButton
              aria-label="toggle between color mode"
              onClick={toggleColorMode}
            >
              {mode === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
            </IconButton>
          </Stack>
        </Toolbar>
        <Divider />
      </GlassBox>
    </AppBar>
  )
}

export default Header
