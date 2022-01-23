import { ThemeProvider, createTheme } from "@mui/material"
import { node } from "prop-types"
import { createContext, useContext, useMemo, useState } from "react"

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
})

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark")
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
      mode,
    }),
    [mode]
  )

  const theme = useMemo(
    () =>
      createTheme({
        zIndex: {
          appBar: 999,
          drawer: 998,
        },
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

ColorModeProvider.propTypes = {
  children: node,
}

const useColorMode = () => useContext(ColorModeContext)

export { ColorModeProvider, useColorMode }
