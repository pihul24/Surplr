function Glow() {
  return (
    <mesh position={[0, 0, -30]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial
        color="#4c1d95"
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default Glow;