import { useState } from "react"

const useDictateJapanese = () => {
  const [voice, setVoice] = useState(null)
  const synth = window.speechSynthesis

  synth.onvoiceschanged = () => {
    const voices = synth.getVoices()
    const japaneseVoice = voices[18]
    setVoice(japaneseVoice)
  }

  const dictate = (text) => {
    const message = new SpeechSynthesisUtterance()
    message.lang = "ja-JP"
    message.voice = voice
    message.text = text
    synth.speak(message)
  }

  return { dictate, hasVoice: voice ? true : false }
}

export default useDictateJapanese
