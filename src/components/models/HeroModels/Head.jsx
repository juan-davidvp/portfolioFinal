
import { useGLTF } from '@react-three/drei'

export function Head(props) {
  const { nodes, materials } = useGLTF('/models/head.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.model.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/head.glb')
