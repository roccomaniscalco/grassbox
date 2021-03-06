import { node } from "prop-types"
import { createContext, useContext, useState } from "react"

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
  const [username, setUsername] = useState("roccomaniscalco")
  const [year, setYear] = useState("current")

  const githubValue = {
    username,
    setUsername,
    year,
    setYear,
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
