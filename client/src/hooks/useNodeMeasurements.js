import { useCallback, useState } from "react"

export const useNodeMeasurements = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, pos: "middle" })
  const nodeRef = useCallback((node) => {
    if (node) node.onmousemove = (e) => handleMouseMove(e, node)
  }, [])

  const handleMouseMove = (e, node) => {
    const rect = node.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const pos = getPosition(x, node)
    setCursor({ x, y, pos })
  }

  const getPosition = (x, node) => {
    const oneThirdWidth = node.offsetWidth * (1 / 3)
    const twoThirdsWidth = node.offsetWidth * (2 / 3)
    if (x < oneThirdWidth) return "left"
    if (x < twoThirdsWidth) return "middle"
    return "right"
  }

  console.log(cursor)
  return { nodeRef, cursor }
}

export default useNodeMeasurements