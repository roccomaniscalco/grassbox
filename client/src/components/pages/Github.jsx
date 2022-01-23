import { GithubProvider } from "../contexts/GithubContext"
import GithubActivityWidget from "../widgets/github/GithubActivityWidget"

const Github = () => {
  return (
    <GithubProvider>
      <GithubActivityWidget />
    </GithubProvider>
  )
}

export default Github
