import { GitHub } from "@mui/icons-material"
import { TextField, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import api from "../../../hooks/api"
import { useGithubContext } from "../../contexts/GithubContext"

const ProfileInput = () => {
  const theme = useTheme()

  const { username, setUsername } = useGithubContext()
  const [value, setValue] = useState(username)
  const [search, setSearch] = useState(username)
  const { activity, error } = api.useGithubActivity(search)

  useEffect(() => {
    if (!activity?.username) return
    setUsername(activity.username)
    setValue(activity.username)
  }, [activity])

  const handleFocus = () => setValue("")
  const handleChange = (e) => setValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      setValue(username)
      setSearch(username)
    } else setSearch(value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        fullWidth
        error={error ? true : false}
        value={value}
        variant="standard"
        placeholder="Search for Github username..."
        InputProps={{
          disableUnderline: error ? false : true,
          startAdornment: (
            <GitHub htmlColor={theme.palette.action.disabled} sx={{ pr: 1 }} />
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

export default ProfileInput
