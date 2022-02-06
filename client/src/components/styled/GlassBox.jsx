import { Box, styled } from "@mui/system"

const GlassBox = styled(Box)(({ theme }) => ({
  borderRadius: 4,
  position: "relative",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: `${theme.palette.background.default}60`,
  backdropFilter: "blur(40px)",
}))

export default GlassBox
