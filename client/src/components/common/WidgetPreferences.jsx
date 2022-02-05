import { Close } from "@mui/icons-material"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import {
  Box,
  ClickAwayListener,
  Fab,
  Grow,
  Popper,
  styled,
  useTheme,
  Zoom,
} from "@mui/material"
import { bool, elementType } from "prop-types"
import { useState } from "react"

const OptionsFab = styled(Fab)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(-2.5),
  top: theme.spacing(-2.5),
  backgroundColor: theme.palette.action.hover,
  "&: hover": { backgroundColor: theme.palette.action.focus },
  padding: theme.spacing(2),
}))

const WidgetPreferences = ({ PreferencesPanel, showFab }) => {
  const theme = useTheme()
  const [showEditWidget, setShowEditWidget] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    if (!showEditWidget) setShowEditWidget(true)
  }

  const handleClickAway = () => {
    setShowEditWidget((previous) => !previous)
  }

  return (
    <>
      <Zoom in={showFab || showEditWidget}>
        <OptionsFab size="small" onClick={handleClick} id="hey">
          {showEditWidget ? (
            <Close htmlColor={theme.palette.text.primary} />
          ) : (
            <EditRoundedIcon htmlColor={theme.palette.text.primary} />
          )}
        </OptionsFab>
      </Zoom>
      <Popper
        open={showEditWidget}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 5],
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Grow {...TransitionProps} style={{ transformOrigin: "top right" }}>
              <Box>
                <PreferencesPanel />
              </Box>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  )
}

WidgetPreferences.propTypes = {
  PreferencesPanel: elementType.isRequired,
  showFab: bool.isRequired,
}

export default WidgetPreferences
