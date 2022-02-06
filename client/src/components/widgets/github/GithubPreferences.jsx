import { AccessTimeRounded } from "@mui/icons-material"
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material"
import { useTheme } from "@mui/system"
import { useGithubContext } from "../../contexts/GithubContext"
import GlassBox from "../../styled/GlassBox"

const getLastYears = (yearCount) => {
  const lastYears = ["current"]
  const currentDate = new Date()
  for (let i = 0; i < yearCount; i++) {
    lastYears.push(currentDate.getFullYear() - i)
  }
  return lastYears
}

const GithubPreferences = () => {
  const theme = useTheme()
  const { year, setYear } = useGithubContext()
  const lastYears = getLastYears(3)

  const handleChange = (_, year) => year && setYear(year)

  return (
    <GlassBox>
      <Stack p={2} gap={2} width={220}>
        <Typography variant="caption" color="textSecondary">
          Github preferences
        </Typography>
        <Stack gap={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <AccessTimeRounded
              fontSize="small"
              htmlColor={theme.palette.action.disabled}
            />
            <Typography variant="body2">Contribution period</Typography>
          </Stack>
          <ToggleButtonGroup
            orientation="vertical"
            value={year}
            exclusive
            onChange={handleChange}
            size="small"
          >
            {lastYears.map((year) => (
              <ToggleButton value={year} aria-label={year} key={year}>
                <Typography
                  variant="body2"
                  sx={{ textTransform: "capitalize" }}
                >
                  {year}
                </Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </GlassBox>
  )
}

export default GithubPreferences
