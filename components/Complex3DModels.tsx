'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Torus, TorusKnot, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

type ComplexModelType = 'torusKnot' | 'abstractSculpture' | 'spiralTower' | 'floatingRings' | 'crystalCluster'

interface AnimatedComplexShapeProps {
  type: ComplexModelType
  color: string
  position: [number, number, number]
  rotationSpeed?: number
  scale?: number
}

function AnimatedComplexShape({ type, color, position, rotationSpeed = 0.3, scale = 1 }: AnimatedComplexShapeProps) {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * rotationSpeed * 0.5
      meshRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3
    }
  })

  const renderShape = () => {
    switch (type) {
      case 'torusKnot':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            <TorusKnot args={[1, 0.3, 128, 32, 2, 3]}>
              <meshStandardMaterial
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </TorusKnot>
          </group>
        )

      case 'abstractSculpture':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Central sphere */}
            <Sphere args={[0.8, 64, 64]}>
              <meshStandardMaterial
                color={color}
                roughness={0.2}
                metalness={0.8}
                emissive={color}
                emissiveIntensity={0.3}
              />
            </Sphere>
            
            {/* Orbiting rings */}
            <Torus args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
            </Torus>
            
            <Torus args={[1.8, 0.1, 16, 100]} rotation={[0, Math.PI / 2, Math.PI / 4]}>
              <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
            </Torus>
          </group>
        )

      case 'spiralTower':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {[...Array(8)].map((_, i) => (
              <Torus
                key={i}
                args={[1 - i * 0.1, 0.15, 16, 32]}
                position={[0, i * 0.4 - 1.4, 0]}
                rotation={[0, (i * Math.PI) / 4, 0]}
              >
                <meshStandardMaterial
                  color={color}
                  roughness={0.1}
                  metalness={0.9}
                  emissive={color}
                  emissiveIntensity={0.2}
                />
              </Torus>
            ))}
          </group>
        )

      case 'floatingRings':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            <Torus args={[2, 0.2, 32, 100]} rotation={[Math.PI / 3, 0, 0]}>
              <meshStandardMaterial
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </Torus>
            
            <Torus args={[1.5, 0.2, 32, 100]} rotation={[Math.PI / 3, Math.PI / 2, 0]}>
              <meshStandardMaterial
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </Torus>
            
            <Torus args={[1, 0.2, 32, 100]} rotation={[Math.PI / 3, Math.PI, 0]}>
              <meshStandardMaterial
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </Torus>
          </group>
        )

      case 'crystalCluster':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Central crystal */}
            <Icosahedron args={[1, 0]}>
              <meshStandardMaterial
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.3}
              />
            </Icosahedron>
            
            {/* Surrounding crystals */}
            {[...Array(6)].map((_, i) => (
              <Icosahedron
                key={i}
                args={[0.5, 0]}
                position={[
                  Math.cos((i * Math.PI * 2) / 6) * 1.5,
                  Math.sin((i * Math.PI) / 3) * 0.5,
                  Math.sin((i * Math.PI * 2) / 6) * 1.5,
                ]}
              >
                <meshStandardMaterial
                  color={color}
                  roughness={0.2}
                  metalness={0.8}
                  emissive={color}
                  emissiveIntensity={0.2}
                />
              </Icosahedron>
            ))}
          </group>
        )

      default:
        return null
    }
  }

  return renderShape()
}

interface Complex3DModelsProps {
  type: ComplexModelType
  color?: string
  position?: [number, number, number]
  rotationSpeed?: number
  scale?: number
  enableOrbitControls?: boolean
}

export default function Complex3DModels({ 
  type, 
  color = '#ffffff',
  position = [0, 0, 0],
  rotationSpeed = 0.3,
  scale = 1,
  enableOrbitControls = false
}: Complex3DModelsProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4a9eff" />
        <pointLight position={[0, 10, -10]} intensity={0.5} color="#ff4a9e" />
        <spotLight position={[5, 5, 5]} intensity={0.5} />
        
        <AnimatedComplexShape 
          type={type} 
          color={color} 
          position={position}
          rotationSpeed={rotationSpeed}
          scale={scale}
        />
      </Canvas>
    </div>
  )
}

