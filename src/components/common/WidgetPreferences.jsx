import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Box, Fab, Grow, Popper, styled, useTheme, Zoom } from "@mui/material";
import { bool, elementType } from "prop-types";
import { useEffect, useState } from "react";

const OptionsFab = styled(Fab)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(-2.5),
  top: theme.spacing(-2.5),
  backgroundColor: theme.palette.action.hover,
  "&: hover": { backgroundColor: theme.palette.action.focus },
  padding: theme.spacing(2),
}));

const WidgetPreferences = ({ PreferencesPanel, showFab }) => {
  const theme = useTheme();
  const [showEditWidget, setShowEditWidget] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowEditWidget((previous) => !previous);
  };

  useEffect(() => {
    if (!showFab) setShowEditWidget(false);
  }, [showFab]);

  return (
    <>
      <Zoom in={showFab}>
        <OptionsFab size="small" onClick={handleClick} id="hey">
          <EditRoundedIcon htmlColor={theme.palette.text.secondary} />
        </OptionsFab>
      </Zoom>
      <Popper
        open={showEditWidget}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "top right" }}>
            <Box>
              <PreferencesPanel />
            </Box>
          </Grow>
        )}
      </Popper>
    </>
  );
};

WidgetPreferences.propTypes = {
  PreferencesPanel: elementType.isRequired,
  showFab: bool.isRequired,
};

export default WidgetPreferences;
