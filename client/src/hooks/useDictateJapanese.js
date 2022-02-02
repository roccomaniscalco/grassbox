import { useEffect, useState } from "react"
import { useJapaneseContext } from "../components/contexts/JapaneseContext"

const useDictateJapanese = () => {
  const { audioSpeed, setVoices, activeVoice, setActiveVoice } =
    useJapaneseContext()
  const [isDictating, setIsDictating] = useState(false)
  const synth = window.speechSynthesis

  const initVoices = () => {
    if (synth.getVoices() === []) return
    const windowVoices = synth.getVoices()
    const japaneseVoices = windowVoices.filter(
      (voice) => voice.lang === "ja-JP"
    )
    setVoices(japaneseVoices)
    if (japaneseVoices.length > 0) setActiveVoice(japaneseVoices[0])
  }

  useEffect(() => {
    initVoices()
  }, [])

  synth.onvoiceschanged = () => {
    initVoices()
  }

  const dictate = (text) => {
    if (!activeVoice || isDictating) return
    setIsDictating(true)
    const message = new SpeechSynthesisUtterance()
    message.lang = "ja-JP"
    message.voice = activeVoice
    message.text = text
    message.rate = audioSpeed
    message.onend = () => setIsDictating(false)
    synth.speak(message)
  }

  return {
    dictate,
    isDictating,
    hasVoice: activeVoice !== null,
  }
}

export default useDictateJapanese
