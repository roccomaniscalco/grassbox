import { Box, styled } from "@mui/system"

const GlassBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}60`,
  backdropFilter: "blur(40px)",
}))

export default GlassBox
