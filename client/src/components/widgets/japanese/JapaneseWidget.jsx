import { Box, Card, Stack, Typography } from "@mui/material"
import japanesePhrases from "../../../utils/japanesePhrases.json"
import WidgetContainer from "../../common/WidgetContainer"
import DictateButton from "./DictateButton"

const JapaneseWidget = () => {
  const phrase = japanesePhrases[5]

  return (
    <WidgetContainer>
      <Card variant="outlined">
        <Box p={2}>
          <Typography variant="h6" color="textSecondary">
            {phrase.japanese}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="h4" color="textPrimary">
              {phrase.romaji}
            </Typography>
            <DictateButton />
          </Stack>
          <Box pt={2.5}>
            <Typography variant="body1" color="textPrimary">
              {phrase.english} {phrase.context && `– ${phrase.context}`}
            </Typography>
          </Box>
        </Box>
      </Card>
    </WidgetContainer>
  )
}

export default JapaneseWidget
