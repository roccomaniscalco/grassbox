import { Box, styled } from "@mui/material";
import { useRef, useState } from "react";
import WidgetPreferences from "./WidgetPreferences";

const WidgetBox = styled(Box)({
  position: "relative",
});

const WidgetContainer = ({ children, PreferencesPanel }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (PreferencesPanel) setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (PreferencesPanel) setIsHovered(false);
  };

  return (
    <WidgetBox
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
