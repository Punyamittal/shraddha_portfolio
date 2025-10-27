'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Box, Torus, Cone, Octahedron, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'

type ShapeType = 'cube' | 'torus' | 'cone' | 'octahedron' | 'tetrahedron'

interface AnimatedShapeProps {
  type: ShapeType
  color: string
  position: [number, number, number]
  rotationSpeed?: number
}

function AnimatedShape({ type, color, position, rotationSpeed = 0.5 }: AnimatedShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * rotationSpeed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed * 0.7
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2
    }
  })

  const renderShape = () => {
    switch (type) {
      case 'cube':
        return (
          <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.3}
              speed={1}
              roughness={0.2}
              metalness={0.8}
            />
          </Box>
        )
      case 'torus':
        return (
          <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={position}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.2}
              speed={1.5}
              roughness={0.1}
              metalness={0.9}
            />
          </Torus>
        )
      case 'cone':
        return (
          <Cone ref={meshRef} args={[1, 2, 32]} position={position}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.25}
              speed={1.2}
              roughness={0.3}
              metalness={0.7}
            />
          </Cone>
        )
      case 'octahedron':
        return (
          <Octahedron ref={meshRef} args={[1.2]} position={position}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.4}
              speed={1}
              roughness={0.2}
              metalness={0.8}
            />
          </Octahedron>
        )
      case 'tetrahedron':
        return (
          <Tetrahedron ref={meshRef} args={[1.5]} position={position}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.35}
              speed={1.3}
              roughness={0.15}
              metalness={0.85}
            />
          </Tetrahedron>
        )
      default:
        return null
    }
  }

  return renderShape()
}

interface Floating3DObjectProps {
  type: ShapeType
  color?: string
  position?: [number, number, number]
  rotationSpeed?: number
  enableOrbitControls?: boolean
}

export default function Floating3DObject({ 
  type, 
  color = '#ffffff',
  position = [0, 0, 0],
  rotationSpeed = 0.5,
  enableOrbitControls = false
}: Floating3DObjectProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a9eff" />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        
        <AnimatedShape 
          type={type} 
          color={color} 
          position={position}
          rotationSpeed={rotationSpeed}
        />
        
        {enableOrbitControls && (
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        )}
      </Canvas>
    </div>
  )
}

