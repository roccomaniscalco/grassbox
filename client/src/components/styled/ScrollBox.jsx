import { Box, styled } from "@mui/material"

const ScrollBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "direction",
})(({ direction }) => ({
  direction: direction ? direction : "ltr",
  position: "relative",
  overflow: "auto",
  scrollbarColor: "transparent transparent",
  msOverflowStyle: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "::-moz-scrollbar": {
    display: "none",
  },
}))

export default ScrollBox
