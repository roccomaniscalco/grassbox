import { useCallback, useState } from "react"

const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState)
  const toggle = useCallback(() => setIsToggled((state) => !state), [])

  return [isToggled, toggle]
}

export default useToggle
