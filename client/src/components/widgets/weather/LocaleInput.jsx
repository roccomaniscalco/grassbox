import LocationOnIcon from "@mui/icons-material/LocationOn"
import { TextField, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import api from "../../../hooks/api"
import { useWeatherContext } from "../../contexts/WeatherContext"

const LocaleInput = () => {
  const theme = useTheme()

  const { locale, setLocale } = useWeatherContext()
  const [value, setValue] = useState(locale.name)
  const [search, setSearch] = useState(locale.name)
  const { location, error } = api.useGeocoding(search)

  useEffect(() => {
    if (!location?.name) return
    setLocale(location)
    setValue(location.name)
  }, [location, setLocale])

  const handleFocus = () => setValue("")
  const handleChange = (e) => setValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      setValue(locale.name)
      setSearch(locale.name)
    } else setSearch(value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ width: "100%" }}>
      <TextField
        fullWidth
        error={error ? true : false}
        value={value}
        variant="standard"
        placeholder="Search for city..."
        InputProps={{
          disableUnderline: error ? false : true,
          startAdornment: (
            <LocationOnIcon
              htmlColor={theme.palette.action.disabled}
              sx={{ pr: 1 }}
            />
          ),
        }}
        onFocus={handleFocus}
        onChange={(e) => handleChange(e)}
        onBlur={handleSubmit}
        autoComplete="off"
      />
    </form>
  )
}

export default LocaleInput
