import { useEffect, useState } from "react"

const useDictateJapanese = () => {
  const [voice, setVoice] = useState(null)
  const synth = window.speechSynthesis

  const extrapolateVoice = () => {
    if (synth.getVoices() === []) return
    const voices = synth.getVoices()
    const japaneseVoice = voices[18]
    setVoice(japaneseVoice)
  }

  useEffect(() => {
    extrapolateVoice()
  }, [])

  synth.onvoiceschanged = () => extrapolateVoice()

  const dictate = (text) => {
    const message = new SpeechSynthesisUtterance()
    message.lang = "ja-JP"
    message.voice = voice
    message.text = text
    synth.speak(message)
  }

  return { dictate, voice }
}

export default useDictateJapanese
