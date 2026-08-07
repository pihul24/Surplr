import React from 'react'
import {useGLTF} from '@react-three/drei'

function FruitCake({
    position=[0,0,0],
    rotation=[0,0,0,],
    scale=1
})
 {
    const {scene}= useGLTF("/models/cake.glb")
  return (
    <primitive
    object={scene}
    position={position}
    rotation={rotation}
    scale={scale}/>
  )
}

useGLTF.preload("/models/cake.glb")
export default FruitCake