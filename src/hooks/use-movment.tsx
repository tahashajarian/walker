import { useFrame } from '@react-three/fiber'
import { useArrows } from './use-arrows'

export const useMovment = (ref) => {
  const arrows = useArrows()

  // useEffect(() => {}, [arrows])

  useFrame((state, delta) => {
    if (arrows.right) {
      ref.current.position.x += 0.1
    }
    if (arrows.left) {
      ref.current.position.x -= 0.1
    }
    if (arrows.up) {
      ref.current.position.z -= 0.1
    }
    if (arrows.down) {
      ref.current.position.z += 0.1
    }
  })
}
