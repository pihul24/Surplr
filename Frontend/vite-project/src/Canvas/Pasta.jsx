import React from 'react'
import {useGLTF} from '@react-three/drei'

function Pasta({
    position=[0,0,0],
    rotation=[0,0,0],
    scale=1
}) {
    const {scene} = useGLTF("/models/pasta.glb")
  return (
    <primitive
        object={scene}
        position={position}
        rotation={rotation}
        scale={scale}
    
    />
  );
}
 useGLTF.preload ("/models/pasta.glb")
export default Pasta