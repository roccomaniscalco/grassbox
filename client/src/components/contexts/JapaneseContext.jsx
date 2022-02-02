import { node } from "prop-types"
import { createContext, useContext, useState } from "react"

const JapaneseContext = createContext()

const JapaneseProvider = ({ children }) => {
  const [audioSpeed, setAudioSpeed] = useState(1)
  const [voices, setVoices] = useState(null)
  const [activeVoice, setActiveVoice] = useState(null)

  const japaneseValue = {
    audioSpeed,
    setAudioSpeed,
    voices,
    setVoices,
    activeVoice,
    setActiveVoice,
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
