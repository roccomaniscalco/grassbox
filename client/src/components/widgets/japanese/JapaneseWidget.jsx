import { Box, Card, Stack, Typography } from "@mui/material"
import japanesePhrases from "../../../utils/japanesePhrases.json"
import WidgetContainer from "../../common/WidgetContainer"
import DictateButton from "./DictateButton"

const JapaneseWidget = () => {
  const phrase = japanesePhrases[3]

  return (
    <WidgetContainer>
      <Card variant="outlined">
        <Box p={2}>
          <Typography variant="h6" color="textSecondary">
            {phrase.japanese}
          </Typography>
          <Typography variant="h4" color="textPrimary">
            {phrase.romaji}
          </Typography>
          <Stack
            direction="row"
            alignItems="end"
            justifyContent="space-between"
            gap={2}
          >
            <Box pt={3}>
              <Typography variant="body1" color="textPrimary">
                {phrase.english} {phrase.context && <i>– {phrase.context}</i>}
              </Typography>
            </Box>

            <DictateButton text={phrase.japanese} />
          </Stack>
        </Box>
      </Card>
    </WidgetContainer>
  )
}

export default JapaneseWidget
