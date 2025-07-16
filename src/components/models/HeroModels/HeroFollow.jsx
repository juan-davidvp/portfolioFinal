import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Head } from './Head';
import * as THREE from 'three';

/**
 * Un componente que envuelve el modelo de la cabeza
 * y lo hace seguir el cursor del mouse.
 */
const HeadFollow = (props) => {
  // Referencia al grupo que contiene el modelo de la cabeza.
  const headGroupRef = useRef();

  // useFrame se ejecuta en cada cuadro de la animación.
  useFrame((state) => {
    if (headGroupRef.current) {
      // Obtenemos las coordenadas normalizadas del mouse (-1 a 1 para x e y).
      const { x, y } = state.pointer;

      // Definimos la rotación objetivo basada en la posición del mouse.
      // El factor de multiplicación controla la sensibilidad del movimiento.
      const targetRotationY = x * Math.PI * 0.25;
      const targetRotationX = -y * Math.PI * 0.25;

      // Interpolamos suavemente la rotación actual de la cabeza hacia el objetivo.
      // Esto crea un efecto de seguimiento suave y orgánico.
      // El valor 0.1 es el factor de amortiguación; un valor más pequeño hará el movimiento más lento.
      headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.y,
        targetRotationY,
        0.1
      );

      headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.x,
        targetRotationX,
        0.1
      );
    }
  });

  return (
    // El grupo de referencia envuelve el componente Head para aplicar la rotación.
    <group {...props} ref={headGroupRef}>
      <Head />
    </group>
  );
};

export default HeadFollow;
