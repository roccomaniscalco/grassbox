import { Box, styled } from "@mui/material"
import { elementType, node } from "prop-types"
import { useRef, useState } from "react"
import WidgetPreferences from "./WidgetPreferences"

const WidgetBox = styled(Box)({
  position: "relative",
})

const WidgetContainer = ({ children, PreferencesPanel }) => {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <WidgetBox
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {PreferencesPanel && (
        <WidgetPreferences
          PreferencesPanel={PreferencesPanel}
          showFab={isHovered}
          containerRef={containerRef}
        />
      )}
      {children}
    </WidgetBox>
  )
}

WidgetContainer.propTypes = {
  children: node.isRequired,
  PreferencesPanel: elementType,
}

export default WidgetContainer
