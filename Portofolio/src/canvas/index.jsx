import React from 'react'
import { Environment,Center } from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import { Canvas } from '@react-three/fiber'
import CameraRig from './CameraRig'

const index = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <Center>
        <Shirt/>
      </Center>
    </Canvas>
  )
}

export default index
