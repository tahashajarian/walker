import { useEffect, useState } from 'react'

export const useArrows = () => {
  const [arrows, setArrows] = useState({
    left: false,
    right: false,
    up: false,
    down: false,
  })
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('keyup', handleKeyDown)
    }
  }, [])
  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'ArrowLeft':
        arrows.left = true
        break
      case 'ArrowRight':
        arrows.right = true
        break
      case 'ArrowDown':
        arrows.down = true
        break
      case 'ArrowUp':
        arrows.up = true
        break
      default:
        break
    }
    setArrows({ ...arrows })
  }
  const handleKeyUp = ({ key }) => {
    switch (key) {
      case 'ArrowLeft':
        arrows.left = false
        break
      case 'ArrowRight':
        arrows.right = false
        break
      case 'ArrowDown':
        arrows.down = false
        break
      case 'ArrowUp':
        arrows.up = false
        break
      default:
        break
    }
    setArrows({ ...arrows })
  }
  return arrows
}
