import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame, useThree } from '@react-three/fiber'
import { Line, useCursor } from '@react-three/drei'
import { Sky } from '@react-three/drei'
import Walker from './walker'

export default function Street({ ...props }) {
  const [start, setStart] = useState(false)
  useThree(({ camera }) => {
    if (!start) {
      camera.position.y = 5
      camera.position.z = 10
    }
    // camera.lookAt(new THREE.Vector3())
  })
  useEffect(() => {
    setStart(true)
  }, [])
  return (
    <group {...props}>
      {/* <camera position={[0, 5, -5]} /> */}

      <Sky />
      <fog attach='fog' args={['#17171b', 30, 40]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[500, 500]} />
        <meshBasicMaterial color={'#009900'} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeBufferGeometry args={[500, 8]} />
        <meshBasicMaterial color={'#999'} />
      </mesh>
      <Walker />
    </group>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Street' } }
}
