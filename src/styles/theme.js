import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  zIndex: {
    appBar: 998,
    modal: 999,
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
