import { Card, Stack, Typography } from "@mui/material"
import { useJapaneseContext } from "../../contexts/JapaneseContext"

const JapanesePreferences = () => {
  const { audioSpeed, setAudioSpeed } = useJapaneseContext()

  return (
    <Card>
      <Stack p={2} gap={2}>
        <Typography variant="caption" color="textSecondary">
          Japanese preferences
        </Typography>
      </Stack>
    </Card>
  )
}

export default JapanesePreferences
