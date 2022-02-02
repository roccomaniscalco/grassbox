import { Card, Slider, Stack, Typography } from "@mui/material"
import { useJapaneseContext } from "../../contexts/JapaneseContext"

const JapanesePreferences = () => {
  const { audioSpeed, setAudioSpeed } = useJapaneseContext()

  const marks = [{ value: 1 }]
  const handleChange = (_, value) => setAudioSpeed(value)

  return (
    <Card>
      <Stack p={2} gap={2} width={300}>
        <Typography variant="caption" color="textSecondary">
          Japanese preferences
        </Typography>
        <Stack direction="row" gap={3} alignItems="center">
          <Typography variant="body2">0.5x</Typography>
          <Slider
            value={audioSpeed}
            color="success"
            marks={marks}
            min={0.5}
            step={0.1}
            max={1.5}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            onChange={handleChange}
          />
          <Typography variant="body2">1.5x</Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default JapanesePreferences
