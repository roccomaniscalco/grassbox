import { useRef, useState } from "react";
import { Box, styled } from "@mui/material";

import WidgetPreferences from "./WidgetPreferences";

const WidgetBox = styled(Box)({
  position: "relative",
});

const WidgetContainer = ({ children, PreferencesPanel }) => {
  const containerRef = useRef(null);
  const [showFab, setShowFab] = useState(false);

  const handleMouseEnter = () => {
    if (PreferencesPanel) setShowFab(true);
  };
  const handleMouseLeave = () => {
    if (PreferencesPanel) setShowFab(false);
  };

  return (
    <WidgetBox ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <WidgetPreferences
        PreferencesPanel={PreferencesPanel}
        showFab={showFab}
        containerRef={containerRef}
      />
      {children}
    </WidgetBox>
  );
};

export default WidgetContainer;
