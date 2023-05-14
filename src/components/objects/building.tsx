import React from 'react'

type Props = {}

const Building = (props: Props) => {
  return (
    <mesh>
      <boxBufferGeometry></boxBufferGeometry>
      <meshBasicMaterial></meshBasicMaterial>
    </mesh>
  )
}

export default Building
