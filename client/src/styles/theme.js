import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  zIndex: {
    appBar: 999,
    drawer: 998,
  },
  palette: {
    mode: "dark",
  },
})

export default theme
