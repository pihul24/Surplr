import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Nebula() {

  const nebulaTexture = useLoader(
    TextureLoader,
    "/textures/Nebula.png"
  );

  return (
    <mesh position={[0, 0, -15]}>
      <planeGeometry args={[35, 22]} />

      <meshBasicMaterial
        map={nebulaTexture}
        transparent
        opacity={0.20}
      />
    </mesh>
  );
}

export default Nebula;