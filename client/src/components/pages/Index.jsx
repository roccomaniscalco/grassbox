import { Grid } from "@mui/material"
import { GithubProvider } from "../contexts/GithubContext"
import { WeatherProvider } from "../contexts/WeatherContext"
import GithubActivityWidget from "../widgets/github/GithubActivityWidget"
import WeatherWidget from "../widgets/weather/WeatherWidget"

const Index = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} lg={7}>
        <GithubProvider>
          <GithubActivityWidget />
        </GithubProvider>
      </Grid>
      <Grid item xs={12} lg={5}>
        <WeatherProvider>
          <WeatherWidget />
        </WeatherProvider>
      </Grid>
    </Grid>
  )
}

export default Index
