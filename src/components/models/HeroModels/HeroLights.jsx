import React from 'react'
import * as THREE from "three";

const HeroLights = () => (
  <>
    <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        color="#D9ECFF" // Un tono azulado claro
      />
      {/* Luz de relleno para suavizar las sombras */}
      <ambientLight intensity={0.5} />

      {/* Luz de acento para el efecto estético */}
      <pointLight position={[-10, -10, -10]} color="#2A004E" intensity={1} /></>
);

export default HeroLights;