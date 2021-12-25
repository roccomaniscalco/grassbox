import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
