import { useMemo } from "react";

function Stars() {
  const positions = useMemo(() => {
    const count = 5000;
    const vertices = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      vertices[i] = (Math.random() - 0.5) * 300;
    }

    return vertices;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial color="white" size={0.4} sizeAttenuation />
    </points>
  );
}

export default Stars;