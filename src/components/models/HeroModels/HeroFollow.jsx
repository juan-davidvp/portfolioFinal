import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Head } from './Head';
import * as THREE from 'three';

/**
 * Un componente que envuelve el modelo de la cabeza
 * y lo hace seguir el cursor del mouse.
 */
const HeadFollow = (props) => {
  // Referencia al grupo que contiene el modelo de la cabeza.
  const headGroupRef = useRef();
  const { gl } = useThree();

  const [isMouseOver, setIsMouseOver] = useState(false);

  // Efecto para agregar y quitar los listeners de eventos del mouse
  useEffect(() => {
    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    const canvasElement = gl.domElement;
    canvasElement.addEventListener('mouseenter', handleMouseEnter);
    canvasElement.addEventListener('mouseleave', handleMouseLeave);

    // Función de limpieza para remover los listeners cuando el componente se desmonte
    return () => {
      canvasElement.removeEventListener('mouseenter', handleMouseEnter);
      canvasElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [gl.domElement]);

  // useFrame se ejecuta en cada cuadro de la animación.
  useFrame((state) => {
    if (headGroupRef.current) {

      let targetRotationX, targetRotationY;
      // Si el mouse está sobre el lienzo, la cabeza sigue al cursor.
      if (isMouseOver) {
        const { x, y } = state.pointer;
        // Definimos la rotación objetivo basada en la posición del mouse.
        // El factor de multiplicación controla la sensibilidad del movimiento.
        targetRotationY = x * Math.PI * 0.15;
        targetRotationX = -y * Math.PI * 0.15;
      } else {
        // Si el mouse no está sobre el lienzo, se activa la animación inactiva.
        // Usamos el tiempo transcurrido para crear un movimiento de balanceo suave.
        const time = state.clock.getElapsedTime();
        targetRotationY = Math.sin(time * 0.7) * 0.2; // Movimiento horizontal
        targetRotationX = Math.cos(time * 0.5) * 0.17;  // Movimiento vertical
      }

      // Interpolamos suavemente la rotación actual de la cabeza hacia el objetivo.
      // Esto crea un efecto de seguimiento suave y orgánico, y transiciones fluidas.
      // El valor 0.08 es el factor de amortiguación; un valor más pequeño hará el movimiento más lento.
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
