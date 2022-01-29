import {
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import { useGithubContext } from "../../contexts/GithubContext"

const getLastYears = (yearCount) => {
  const lastYears = ["current"]
  const currentDate = new Date()
  for (let i = 0; i < yearCount; i++) {
    lastYears.push(currentDate.getFullYear() - i)
  }
  return lastYears
}

const GithubPreferences = () => {
  const { year, setYear } = useGithubContext()
  const lastYears = getLastYears(3)

  const handleChange = (_, year) => year && setYear(year)

  return (
    <Paper>
      <Stack p={2} gap={2} width={170}>
        <Typography variant="caption" color="textSecondary">
          Github Preferences
        </Typography>
        <ToggleButtonGroup
          orientation="vertical"
          value={year}
          exclusive
          onChange={handleChange}
          size="small"
          color="success"
        >
          {lastYears.map((year) => (
            <ToggleButton value={year} aria-label={year} key={year}>
              <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                {year}
              </Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>
    </Paper>
  )
}

export default GithubPreferences
