import { VolumeUpRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useTheme } from "@mui/system"
import { string } from "prop-types"
import useDictateJapanese from "../../../hooks/useDictateJapanese"

const DictateButton = ({ text }) => {
  const theme = useTheme()
  const { dictate, hasVoice, isDictating } = useDictateJapanese()

  return (
    <IconButton
      sx={{
        background: theme.palette.divider,
        color: isDictating
          ? theme.palette.success.main
          : theme.palette.text.primary,
      }}
      disabled={!hasVoice}
      aria-label="play Japanese phrase of the day"
      onClick={() => dictate(text)}
    >
      <VolumeUpRounded />
    </IconButton>
  )
}

DictateButton.propTypes = {
  text: string,
}

export default DictateButton
