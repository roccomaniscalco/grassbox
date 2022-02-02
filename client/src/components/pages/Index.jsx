import { Grid } from "@mui/material"
import { GithubProvider } from "../contexts/GithubContext"
import { JapaneseProvider } from "../contexts/JapaneseContext"
import { WeatherProvider } from "../contexts/WeatherContext"
import GithubActivityWidget from "../widgets/github/GithubActivityWidget"
import JapaneseWidget from "../widgets/japanese/JapaneseWidget"
import WeatherWidget from "../widgets/weather/WeatherWidget"

const Index = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} lg={7}>
        <GithubProvider>
          <GithubActivityWidget />
        </GithubProvider>
      </Grid>
      <Grid container item xs={12} lg={5} spacing={3}>
        <Grid item xs={12}>
          <JapaneseProvider>
            <JapaneseWidget />
          </JapaneseProvider>
        </Grid>
        <Grid item xs={12}>
          <WeatherProvider>
            <WeatherWidget />
          </WeatherProvider>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
