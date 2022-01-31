import { useEffect, useState } from "react"

const useDictateJapanese = () => {
  const [voice, setVoice] = useState(null)
  const [isDictating, setIsDictating] = useState(false)
  const synth = window.speechSynthesis

  const extrapolateVoice = () => {
    if (synth.getVoices() === []) return
    const voices = synth.getVoices()
    const japaneseVoice = voices[18]
    setVoice(japaneseVoice)
  }

  useEffect(() => {
    extrapolateVoice()
    console.log(isDictating)
  }, [isDictating])

  synth.onvoiceschanged = () => extrapolateVoice()

  const dictate = (text) => {
    if (!voice) return
    setIsDictating(true)
    const message = new SpeechSynthesisUtterance()
    message.lang = "ja-JP"
    message.voice = voice
    message.text = text
    message.onend = () => setIsDictating(false)
    synth.speak(message)
  }

  return {
    dictate,
    isDictating,
    hasVoice: voice !== null,
  }
}

export default useDictateJapanese
