import { useCallback, useState } from "react"

export const useNodeMeasurements = () => {
  const [cursor, setCursor] = useState({})
  const [node, setNode] = useState({})
  const nodeRef = useCallback((node) => {
    if (node) node.onmousemove = (e) => handleMouseMove(e, node)
  }, [])

  const handleMouseMove = (e, node) => {
    const rect = node.getBoundingClientRect()
    const width = node.offsetWidth
    const height = node.offsetHeight
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setCursor({ x, y })
    setNode({ width, height })
  }

  const cleanUp = () => {
    setCursor({})
    setNode({})
    nodeRef(null)
  }

  return { nodeRef, cursor, node, cleanUp }
}

export default useNodeMeasurements
