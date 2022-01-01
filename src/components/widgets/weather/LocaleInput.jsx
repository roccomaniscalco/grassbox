import { useEffect, useState } from "react";
import { TextField, useTheme } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { useWeatherContext } from "../../../contexts/WeatherContext";
import useGeocoding from "../../../hooks/useGeocoding";

const LocaleInput = ({ showAdornment = true }) => {
  const theme = useTheme();

  const { locale, setLocale } = useWeatherContext();
  const [value, setValue] = useState(locale.name);
  const [search, setSearch] = useState(locale.name);
  const { location, error } = useGeocoding(search);

  useEffect(() => {
    if (!location?.name) return;
    setLocale(location);
    setValue(location.name);
  }, [location]);

  const handleFocus = () => setValue("");
  const handleChange = (e) => setValue(e.target.value);
  const handleBlur = () => {
    if (!value) {
      setValue(locale.name);
      setSearch(locale.name);
    } else setSearch(value);
  };

  return (
    <TextField
      error={error ? true : false}
      value={value}
      variant="standard"
      placeholder="Search for city"
      fullWidth
      InputProps={{
        disableUnderline: error ? false : true,
        startAdornment: showAdornment && (
          <SearchRoundedIcon
            htmlColor={theme.palette.action.disabled}
            sx={{ pr: 1 }}
          />
        ),
      }}
      onFocus={handleFocus}
      onChange={(e) => handleChange(e)}
      onBlur={handleBlur}
    />
  );
};

export default LocaleInput;
