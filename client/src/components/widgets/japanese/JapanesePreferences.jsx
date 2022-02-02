import { SlowMotionVideoRounded } from "@mui/icons-material"
import { Card, Slider, Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/system"
import { useJapaneseContext } from "../../contexts/JapaneseContext"

const JapanesePreferences = () => {
  const theme = useTheme()
  const { audioSpeed, setAudioSpeed } = useJapaneseContext()

  const marks = [{ value: 1 }]
  const handleChange = (_, value) => setAudioSpeed(value)

  return (
    <Card>
      <Stack p={2} gap={2} width={300}>
        <Typography variant="caption" color="textSecondary">
          Japanese preferences
        </Typography>
        <Stack gap={0.5}>
          <Stack direction="row" gap={1} alignItems="center">
            <SlowMotionVideoRounded
              fontSize="small"
              htmlColor={theme.palette.action.disabled}
            />
            <Typography variant="body2">
              Playback speed: {audioSpeed}x
            </Typography>
          </Stack>
          <Stack direction="row" gap={3} alignItems="center">
            <Typography variant="body2">0.5x</Typography>
            <Slider
              value={audioSpeed}
              color="success"
              marks={marks}
              min={0.5}
              step={0.1}
              max={1.5}
              aria-labelledby="non-linear-slider"
              onChange={handleChange}
            />
            <Typography variant="body2">1.5x</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default JapanesePreferences
