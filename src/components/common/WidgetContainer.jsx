import { useRef, useState } from "react";
import { Box, styled } from "@mui/material";

import WidgetPreferences from "./WidgetPreferences";

const WidgetBox = styled(Box)({
  position: "relative",
});

const WidgetContainer = ({ children, PreferencesPanel }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    if (PreferencesPanel) setIsHovered(!isHovered);
  };

  return (
    <WidgetBox
      ref={containerRef}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <WidgetPreferences
        PreferencesPanel={PreferencesPanel}
        showFab={isHovered}
        containerRef={containerRef}
      />
      {children}
    </WidgetBox>
  );
};

export default WidgetContainer;
