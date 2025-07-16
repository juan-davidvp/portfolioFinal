import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Head } from "./Head";

const HeroExperience = () => {
  return (
    

    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.2} color="#1a1a40" />
          <directionalLight position={[5, 5, 5]} intensity={5} color="#ffffff" />
          <OrbitControls
        enablePan={false} // Prevents panning of the scene
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />
        <Head />
      </Canvas>

      
    
  )
}

export default HeroExperience