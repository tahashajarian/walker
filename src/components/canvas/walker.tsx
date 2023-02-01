import { useArrows } from '@/hooks/use-arrows'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

type Props = {}

const Walker = (props: Props) => {
  const arrows = useArrows()
  const walkerRef = useRef(null)

  useEffect(() => {}, [arrows])

  useFrame((state, delta) => {
    if (arrows.right) {
      walkerRef.current.position.x += 0.1
    }
    if (arrows.left) {
      walkerRef.current.position.x -= 0.1
    }
    if (arrows.up) {
      walkerRef.current.position.z -= 0.1
    }
    if (arrows.down) {
      walkerRef.current.position.z += 0.1
    }
    // const t = state.clock.getElapsedTime()
    // mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    // mesh.current.rotation.z -= delta / 4
  })
  return (
    <mesh ref={walkerRef} position-y={1}>
      <capsuleGeometry />
      <meshBasicMaterial />
    </mesh>
  )
}

export default Walker
