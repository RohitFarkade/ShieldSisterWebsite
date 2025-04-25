import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

function Model({ screenshotUrl }) {
  const phoneRef = useRef();
  const screenRef = useRef();
  
  // Load the screenshot texture
  const texture = useLoader(TextureLoader, screenshotUrl);
  
  // Animate the phone
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    phoneRef.current.rotation.x = THREE.MathUtils.lerp(phoneRef.current.rotation.x, Math.cos(t / 2) / 8, 0.1);
    phoneRef.current.rotation.y = THREE.MathUtils.lerp(phoneRef.current.rotation.y, Math.sin(t / 4) / 8, 0.1);
    phoneRef.current.rotation.z = THREE.MathUtils.lerp(phoneRef.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
    phoneRef.current.position.y = THREE.MathUtils.lerp(phoneRef.current.position.y, Math.sin(t / 1.5) / 10, 0.1);
  });

  return (
    <group ref={phoneRef} dispose={null}>
      {/* Phone body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.4, 5, 0.4]} />
        <meshPhysicalMaterial 
          color="#303030" 
          metalness={0.8} 
          roughness={0.2} 
          clearcoat={0.5} 
          clearcoatRoughness={0.3}
          rounded={true}
          radius={0.1}
        />
      </mesh>
      
      {/* Phone screen */}
      <mesh ref={screenRef} position={[0, 0, 0.21]}>
        <planeGeometry args={[2.2, 4.6]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      
      {/* Home button */}
      <mesh position={[0, -2.3, 0.21]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} rotation={[Math.PI/2, 0, 0]} />
        <meshStandardMaterial color="#222" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Camera */}
      <mesh position={[0, 2.3, 0.21]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} rotation={[Math.PI/2, 0, 0]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Phone3D({ screenshotUrl }) {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35 }}>
        <color attach="background" args={['#f8f9fa']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Model screenshotUrl={screenshotUrl} />
        </PresentationControls>
        
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}