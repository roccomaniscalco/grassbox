import { VolumeUpRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import useDictateJapanese from "../../../hooks/useDictateJapanese"
import japanesePhrases from "../../../utils/japanesePhrases.json"

const DictateButton = () => {
  const { dictate, voice } = useDictateJapanese()

  if (!voice) return null

  return (
    <IconButton
      size="small"
      color="success"
      aria-label="play Japanese phrase of the day"
      onClick={() => dictate(japanesePhrases[0].japanese)}
    >
      <VolumeUpRounded fontSize="inherit" />
    </IconButton>
  )
}

export default DictateButton
