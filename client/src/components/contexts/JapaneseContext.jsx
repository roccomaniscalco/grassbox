import { node } from "prop-types"
import { createContext, useContext, useState } from "react"

const JapaneseContext = createContext()

const JapaneseProvider = ({ children }) => {
  const [audioSpeed, setAudioSpeed] = useState(1)

  const japaneseValue = {
    audioSpeed,
    setAudioSpeed,
  }

  return (
    <JapaneseContext.Provider value={japaneseValue}>
      {children}
    </JapaneseContext.Provider>
  )
}

JapaneseProvider.propTypes = {
  children: node,
}

const useJapaneseContext = () => useContext(JapaneseContext)

export { JapaneseProvider, useJapaneseContext }
