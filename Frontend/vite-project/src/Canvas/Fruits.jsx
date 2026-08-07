import React from 'react'
import {useGLTF} from '@react-three/drei'
function Fruits ({
    position=[0,0,0],
    rotation=[0,0,0],
    scale=1,
}){
    const {scene}=useGLTF("/models/fruits.glb")
  return (
    <primitive
    object={scene}
    position={position}
    rotation={rotation}
    scale={scale}/>
  );
}
useGLTF.preload("/models/fruits.glb")
export default Fruits