'use client'

import { useRef, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

const Floating3DObject = dynamic(() => import('./Floating3DObject'), { ssr: false })

type ShapeType = 'cube' | 'torus' | 'cone' | 'octahedron' | 'tetrahedron'

interface Revolving3DOrbitProps {
  type: ShapeType
  color?: string
  size?: number
  orbitRadius?: number
}

export default function Revolving3DOrbit({ 
  type, 
  color = '#ffffff',
  size = 200,
  orbitRadius = 300
}: Revolving3DOrbitProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Calculate orbit position based on scroll
  const angle = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]) // 2 full rotations
  
  const x = useTransform(angle, (value) => {
    return Math.cos(value) * orbitRadius
  })

  const y = useTransform(angle, (value) => {
    return Math.sin(value) * orbitRadius * 0.5 // Elliptical orbit
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.5, 1, 1.2, 1, 0.5])

  // Wipe effect - circular wipe
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      'circle(0% at 50% 50%)',
      'circle(100% at 50% 50%)',
      'circle(100% at 50% 50%)',
      'circle(0% at 50% 50%)',
    ]
  )

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        style={{
          x,
          y,
          opacity,
          scale,
          clipPath,
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
      >
        <div style={{ width: size, height: size }}>
          <Suspense fallback={null}>
            <Floating3DObject 
              type={type} 
              color={color}
              rotationSpeed={0.5}
            />
          </Suspense>
        </div>
      </motion.div>
    </div>
  )
}

