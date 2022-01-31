import { VolumeUpRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { string } from "prop-types"
import useDictateJapanese from "../../../hooks/useDictateJapanese"

const DictateButton = ({ text }) => {
  const { dictate, voice } = useDictateJapanese()

  if (!voice) return null

  return (
    <IconButton
      size="small"
      color="success"
      aria-label="play Japanese phrase of the day"
      onClick={() => dictate(text)}
    >
      <VolumeUpRounded fontSize="inherit" />
    </IconButton>
  )
}

DictateButton.propTypes = {
  text: string,
}

export default DictateButton
