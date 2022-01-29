import {
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import { useGithubContext } from "../../contexts/GithubContext"

const GithubPreferences = () => {
  const { year, setYear } = useGithubContext()
  const handleChange = (_, year) => year && setYear(year)

  return (
    <Paper>
      <Stack p={2} gap={2} width={180}>
        <Typography variant="caption">Github Preferences</Typography>
        <ToggleButtonGroup
          orientation="vertical"
          value={year}
          exclusive
          onChange={handleChange}
          size="small"
        >
          <ToggleButton value="current" aria-label="current">
            <Typography variant="body2">current</Typography>
          </ToggleButton>
          <ToggleButton value="2022" aria-label="2022">
            <Typography variant="body2">2022</Typography>
          </ToggleButton>
          <ToggleButton value="2021" aria-label="2021">
            <Typography variant="body">2021</Typography>
          </ToggleButton>
          <ToggleButton value="2020" aria-label="2020">
            <Typography variant="body">2020</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Paper>
  )
}

export default GithubPreferences
