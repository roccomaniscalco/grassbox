import { CssBaseline } from "@mui/material"
import { StrictMode } from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ColorModeProvider } from "./components/contexts/ColorModeContext"

render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <CssBaseline />
        <App />
      </ColorModeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
)
