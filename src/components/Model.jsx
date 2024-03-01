import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model({ position, size, detail, color }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotateX(-0.001);
    ref.current.rotateY(0.001);
  });

  return (
    <mesh position={position} ref={ref}>
      <icosahedronGeometry args={[size, detail]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
