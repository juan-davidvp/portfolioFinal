import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Head } from "./Head";
import * as THREE from "three";

const HeroExperience = () => {
  return (
    

    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.2} color="#1a1a40" />
          {/* lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[-2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#4cc9f0"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
          <OrbitControls
        enablePan={false} // Prevents panning of the scene
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 3.5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 1.5} // Maximum angle for vertical rotation
      />
        <group position={[0, -1, 0]} scale={[1.3, 1.3, 1.3]}>

          <Head />

        </group>
        
      </Canvas>

      
    
  )
}

export default HeroExperience