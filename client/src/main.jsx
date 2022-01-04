import { CssBaseline, ThemeProvider } from "@mui/material"
import { StrictMode } from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import theme from "./styles/theme"

render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
)
