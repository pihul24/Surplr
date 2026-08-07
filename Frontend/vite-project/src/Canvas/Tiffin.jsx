import React from 'react'
import { useGLTF } from '@react-three/drei'


function Tiffin({
    position=[0,0,0],
    rotation=[0,0,0],
    scale=1,

}) {
    const {scene} = useGLTF("/models/Tiffin.glb")
  return (
    <primitive
    object={scene}
    position={position}
    rotation={rotation}
    scale={scale}
    />

  );
  
}

useGLTF.preload("/models/Tiffin.glb")
export default Tiffin;



