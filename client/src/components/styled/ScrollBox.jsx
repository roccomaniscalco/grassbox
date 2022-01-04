import { Box, styled } from "@mui/material"

const ScrollBox = styled(Box)({
  overflow: "auto",
  scrollbarColor: "transparent transparent",
  msOverflowStyle: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "::-moz-scrollbar": {
    display: "none",
  },
})

export default ScrollBox