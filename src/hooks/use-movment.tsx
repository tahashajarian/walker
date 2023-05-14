import { useFrame } from '@react-three/fiber'
import { useArrows } from './use-arrows'

export const useMovment = (ref, stickCamera) => {
  const smoothness = 1
  const arrows = useArrows()

  // useEffect(() => {}, [arrows])

  useFrame((state, delta) => {
    // console.log(delta)
    if (arrows.right) {
      const targetPosition = ref.current.position.clone()
      targetPosition.x += 2 * delta
      ref.current.position.lerp(targetPosition, smoothness)
    }

    if (arrows.left) {
      const targetPosition = ref.current.position.clone()
      targetPosition.x -= 2 * delta
      ref.current.position.lerp(targetPosition, smoothness)
    }

    if (arrows.up) {
      const targetPosition = ref.current.position.clone()
      targetPosition.z -= 2 * delta
      ref.current.position.lerp(targetPosition, smoothness)
    }

    if (arrows.down) {
      const targetPosition = ref.current.position.clone()
      targetPosition.z += 2 * delta
      ref.current.position.lerp(targetPosition, smoothness)
    }

    if (stickCamera) {
      // console.log(ref.current.position.x, state.camera.position)
      // const walkerX = ref.current.position.x
      // state.camera.position.x = walkerX
      // // state.camera.lookAt(ref.current)
      // const targetPosition = ref.current.position.clone()
      // state.camera.lookAt(targetPosition)
      // state.camera.position.lerp(targetPosition, 0.5)
    }
  })
}
