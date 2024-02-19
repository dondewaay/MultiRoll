import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model({ position, size, detail, color }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotateX(-0.003);
    ref.current.rotateY(0.003);
  });

  return (
    <mesh position={position} ref={ref}>
      <icosahedronGeometry args={[size, detail]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
