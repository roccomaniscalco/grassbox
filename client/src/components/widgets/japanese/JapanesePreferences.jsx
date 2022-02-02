import { SlowMotionVideoRounded, TranslateRounded } from "@mui/icons-material"
import {
  Card,
  Slider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/system"
import { useJapaneseContext } from "../../contexts/JapaneseContext"

const JapanesePreferences = () => {
  const theme = useTheme()
  const { audioSpeed, setAudioSpeed, voices, activeVoice, setActiveVoice } =
    useJapaneseContext()

  const marks = [{ value: 1 }]
  const handleSliderChange = (_, value) => setAudioSpeed(value)
  const handleToggleChange = (_, value) => {
    if (value !== null) setActiveVoice(value)
  }
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
              Dictation speed: {audioSpeed}x
            </Typography>
          </Stack>
          <Stack direction="row" gap={3} alignItems="center">
            <Typography variant="body2">0.5x</Typography>
            <Slider
              value={audioSpeed}
              marks={marks}
              min={0.5}
              step={0.1}
              max={1.5}
              aria-labelledby="non-linear-slider"
              onChange={handleSliderChange}
            />
            <Typography variant="body2">1.5x</Typography>
          </Stack>
        </Stack>
        <Stack gap={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <TranslateRounded
              fontSize="small"
              htmlColor={theme.palette.action.disabled}
            />
            <Typography variant="body2">Dictation voice</Typography>
          </Stack>
          <Stack direction="row" gap={3} alignItems="center">
            {voices && (
              <ToggleButtonGroup
                exclusive
                orientation="vertical"
                fullWidth
                size="small"
                value={activeVoice}
                onChange={handleToggleChange}
              >
                {voices.map((voice) => (
                  <ToggleButton key={voice.name} value={voice}>
                    <Typography variant="body2">
                      🇯🇵 {voice.name} ({voice.lang})
                    </Typography>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default JapanesePreferences
