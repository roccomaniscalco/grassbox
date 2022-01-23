import { node } from "prop-types"
import { createContext, useContext, useState } from "react"

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
  const [username, setUsername] = useState("roccomaniscalco")

  const githubValue = {
    username,
    setUsername,
  }

  return (
    <GithubContext.Provider value={githubValue}>
      {children}
    </GithubContext.Provider>
  )
}

GithubProvider.propTypes = {
  children: node,
}

const useGithubContext = () => useContext(GithubContext)

export { GithubProvider, useGithubContext }
