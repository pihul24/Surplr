import React from 'react'
import { useGLTF } from '@react-three/drei'


function Pizza({
    position=[0,0,0],
    rotation=[0,0,0],
    scale=1,

}) {
    const {scene} = useGLTF("/models/pizza__tray.glb")
  return (
    <primitive
    object={scene}
    position={position}
    rotation={rotation}
    scale={scale}
    />

  );
  
}

useGLTF.preload("/models/pizza__tray.glb")
export default Pizza;



