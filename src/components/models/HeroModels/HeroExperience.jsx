import React from 'react'
import { Canvas } from "@react-three/fiber";
import HeadFollow from "./HeroFollow"; // Importamos el nuevo componente
import * as THREE from "three";

const HeroExperience = () => {
  return (
    

    <Canvas
      camera={{ position: [0, 0, 5], fov: 30 }}>
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
          
        <group position={[0, -0.7, 0]} scale={[0.8, 0.8, 0.8]}>

          <HeadFollow />

        </group>
        
      </Canvas>

      
    
  )
}

export default HeroExperience