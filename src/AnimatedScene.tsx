import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Object3D } from 'three';

function CourageModel() {
  const gltf = useGLTF('/courage_the_cowardly_dog-simple_design_low_poly.glb');
  const modelRef = useRef<Object3D>(null);

  useFrame(({ clock }) => {
    if (!modelRef.current) return;

    // Limited horizontal rotation - only front/left/right (no back - stops at ±π/2)
    modelRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * (Math.PI / 3);
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1.4}
      position={[0, -1.2, 0]}
    />
  );
}

export default function AnimatedScene() {
  return (
    <group position={[0, 0.25, 0]}>
      <CourageModel />
    </group>
  );
}

useGLTF.preload('/courage_the_cowardly_dog-simple_design_low_poly.glb');
