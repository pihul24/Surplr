import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Orbit({
  children,
  radius = 4,
  speed = 0.2,
  phase = 0,
  height = 0,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
  const t = clock.getElapsedTime() * speed + phase;

  // Elliptical path instead of a circle
  ref.current.position.x = Math.cos(t) * radius * 1.8;

  // Vertical floating
  ref.current.position.y = height + Math.sin(t * 0.8) * 1.2;

  // Less depth so it looks like it's crossing diagonally
  ref.current.position.z = Math.sin(t) * radius * 0.6;

  // Gentle self rotation
  ref.current.rotation.y += 0.003;
});

  return <group ref={ref}>{children}</group>;
}

export default Orbit;