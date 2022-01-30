import { VolumeUpRounded } from "@mui/icons-material"
import { Box, Card, IconButton } from "@mui/material"
import useDictateJapanese from "../../../hooks/useDictateJapanese"
import WidgetContainer from "../../common/WidgetContainer"

const JapaneseWidget = () => {
  const { dictate, hasVoice } = useDictateJapanese()

  return (
    <WidgetContainer>
      <Card variant="outlined">
        <Box p={2}>
          {hasVoice && (
            <IconButton
              color="primary"
              aria-label="play Japanese phrase of the day"
              onClick={() => dictate("私の名前はです")}
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
