"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingObjects() {
  const mesh1 = useRef<THREE.Mesh>(null!);
  const mesh2 = useRef<THREE.Mesh>(null!);
  const mesh3 = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (mesh1.current) {
      mesh1.current.rotation.x += delta * 0.2;
      mesh1.current.rotation.y += delta * 0.3;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x -= delta * 0.3;
      mesh2.current.rotation.z -= delta * 0.2;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y += delta * 0.4;
      mesh3.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        {/* Main Center Object */}
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          <mesh ref={mesh1} position={[0, 0, 0]} scale={1.2}>
            <icosahedronGeometry args={[1, 0]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              roughness={0.1} 
              metalness={0.1}
              transmission={1}
              ior={1.5}
              thickness={0.5}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </Float>

        {/* Floating Ring */}
        <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
          <mesh ref={mesh2} position={[-2.5, 1.5, -1]} scale={0.8}>
            <torusGeometry args={[1, 0.2, 32, 64]} />
            <meshPhysicalMaterial 
              color="#FF9A76" 
              roughness={0.2} 
              metalness={0.8}
              clearcoat={1}
            />
          </mesh>
        </Float>

        {/* Floating Sphere */}
        <Float speed={1} rotationIntensity={1} floatIntensity={2.5}>
          <mesh ref={mesh3} position={[2.5, -1.5, 1]} scale={0.6}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhysicalMaterial 
              color="#9A81F2" 
              roughness={0} 
              metalness={0.2}
              transmission={0.9}
              ior={1.5}
              thickness={1}
            />
          </mesh>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -3.5, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#000000" />
      <Environment preset="city" />
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#9A81F2" />
      <directionalLight position={[0, 5, -10]} intensity={1} color="#FF9A76" />
    </>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[#E6E1F4]/30">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <FloatingObjects />
      </Canvas>
    </div>
  );
}
