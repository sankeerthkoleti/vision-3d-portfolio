
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D Objects Component
const AnimatedObjects = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.5;
      sphereRef.current.rotation.x = time * 0.3;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.y = time * 0.2;
      boxRef.current.position.x = Math.cos(time * 0.5) * 2;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.z = Math.sin(time * 0.3) * 1;
    }
  });

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4338ca" />

      {/* Animated 3D Objects */}
      <Sphere ref={sphereRef} args={[0.8, 32, 32]} position={[-3, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" wireframe />
      </Sphere>

      <Box ref={boxRef} args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.8} />
      </Box>

      <Torus ref={torusRef} args={[1.2, 0.4, 16, 100]} position={[3, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" wireframe />
      </Torus>

      {/* Orbit Controls for interaction */}
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxDistance={10}
        minDistance={3}
      />
    </>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
    >
      <AnimatedObjects />
    </Canvas>
  );
};

export default Scene3D;
