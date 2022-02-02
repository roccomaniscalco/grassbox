import { JapaneseProvider } from "../contexts/JapaneseContext"
import JapaneseWidget from "../widgets/japanese/JapaneseWidget"

const Japanese = () => {
  return (
    <JapaneseProvider>
      <JapaneseWidget />
    </JapaneseProvider>
  )
}

export default Japanese
