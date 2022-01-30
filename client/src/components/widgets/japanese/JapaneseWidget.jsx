import { VolumeUpRounded } from "@mui/icons-material"
import { Box, Card, IconButton } from "@mui/material"
import { useState } from "react"
import WidgetContainer from "../../common/WidgetContainer"

const JapaneseWidget = () => {
  const [voice, setVoice] = useState(null)
  const synth = speechSynthesis

  synth.onvoiceschanged = () => {
    const voices = synth.getVoices()
    const japaneseVoice = voices[18]
    setVoice(japaneseVoice)
  }

  const handleClick = () => {
    const message = new SpeechSynthesisUtterance()
    message.voice = voice
    message.text = "たくさん"
    message.lang = "ja-JP"
    synth.speak(message)
  }

  return (
    <WidgetContainer>
      <Card variant="outlined">
        <Box p={2}>
          {voice && (
            <IconButton
              color="primary"
              aria-label="play Japanese phrase of the day"
              onClick={handleClick}
            >
              <VolumeUpRounded />
            </IconButton>
          )}
        </Box>
      </Card>
    </WidgetContainer>
  )
}

export default JapaneseWidget
