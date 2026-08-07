import { useMemo } from "react";

function Helix(props) {
  const positions = useMemo(() => {
    const vertices = [];

    const radius = 2;
    const height = 8;
    const turns = 6;
    const particles = 1500;

    for (let i = 0; i < particles; i++) {
      const t = i / particles;
      const angle = t * Math.PI * 2 * turns;

      const x = radius * Math.cos(angle) + (Math.random() - 0.5) * 0.35;
      const y = t * height - height / 2;
      const z = radius * Math.sin(angle) + (Math.random() - 0.5) * 0.35;

      vertices.push(x, y, z);
    }

    return new Float32Array(vertices);
  }, []);

  return (
    <group position={[2.8, 0, 0]}
      rotation={props.rotation }>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#b388ff"
          size={0.08}
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default Helix;