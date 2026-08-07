import { Canvas } from "@react-three/fiber";

import Lights from "./Lights";
import Background from "./Background";
import Stars from "./Stars";

import Helix from "./Helix";
import Pizza from "./Pizza";
import Fruits from "./Fruits";
import FruitCake from "./FruitCake";
import Pasta from "./Pasta";

import Orbit from "./Orbit"


function Scene() {
  return (
    <>
      {/*  BACKGROUND (stars + nebula) */}
      {/* <Canvas
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Background />
        <Stars position={[0, 0, -80]} />
      </Canvas> */}

      {/*  HERO SECTION (helix + food) */}
      <Canvas
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          zIndex: 1,
        }}
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}
      >
        <Lights />

        <Helix rotation={[0, Math.PI / 2, 0]} />

        {/* for rotation  */}

        

        <Orbit 
          radius={2.8}
          speed={0.18}
          phase={0}
          height={0}
          >
          <Pizza
          position={[1, -0.2, 1.5]}
          rotation={[0, Math.PI / 2, 0.6]}
          scale={0.22}
        />
        </Orbit>


        <Orbit
        radius={2.8}
        speed={0.18}
        phase={1.5}
        height={1/5}
        >
            <Fruits
          position={[2, 1, 1.5]}
          rotation={[0, Math.PI / 2, 0.6]}
          scale={4.5}
        />
        </Orbit>

        <Orbit
        radius={2.8}
        speed={0.18}
        phase={3}
        height={-2}
       
        >
          <FruitCake
          position={[4, -1.7, 1.5]}
          rotation={[-1.39, Math.PI / 9, 1]}
          scale={0.17}
        />
        </Orbit>

          <Orbit 
          radius={2.8}
          speed={0.18}
          phase={4.5}
          rotation={-1}
          >
            <Pasta
          position={[2.5, -2.5, 1.5]}
          rotation={[-0.5, Math.PI / 2, 1.2]}
          scale={4.5}
        />
          </Orbit>
      </Canvas>
    </>
  );
}

export default Scene;