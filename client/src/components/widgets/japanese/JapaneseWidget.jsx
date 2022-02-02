import { Box, Card, Stack, Typography } from "@mui/material"
import japanesePhrases from "../../../utils/japanesePhrases.json"
import WidgetContainer from "../../common/WidgetContainer"
import DictateButton from "./DictateButton"
import JapanesePreferences from "./JapanesePreferences"

const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * japanesePhrases.length)
  return japanesePhrases[randomIndex]
}

const JapaneseWidget = () => {
  const phrase = getRandomPhrase()

  return (
    <WidgetContainer PreferencesPanel={JapanesePreferences}>
      <Card variant="outlined">
        <Stack
          direction="row"
          alignItems="end"
          justifyContent="space-between"
          gap={2}
          p={2}
        >
          <Box>
            <Typography variant="h6" color="textSecondary">
              {phrase.japanese}
            </Typography>
            <Typography variant="h4" color="textPrimary" paragraph>
              {phrase.romaji}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {phrase.english} {phrase.context && <i>– {phrase.context}</i>}
            </Typography>
          </Box>
          <DictateButton text={phrase.japanese} />
        </Stack>
      </Card>
    </WidgetContainer>
  )
}

export default JapaneseWidget
