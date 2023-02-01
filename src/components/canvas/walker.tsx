import { useArrows } from '@/hooks/use-arrows'
import { useMovment } from '@/hooks/use-movment'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

type Props = {}

const Walker = (props: Props) => {
  const walkerRef = useRef(null)
  useMovment(walkerRef)
  return (
    <mesh ref={walkerRef} position-y={1}>
      <capsuleGeometry />
      <meshBasicMaterial />
    </mesh>
  )
}

export default Walker
