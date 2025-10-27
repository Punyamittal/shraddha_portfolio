'use client'

import { useRef, Suspense } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import dynamic from 'next/dynamic'

const Floating3DObject = dynamic(() => import('./Floating3DObject'), { ssr: false })

type ShapeType = 'cube' | 'torus' | 'cone' | 'octahedron' | 'tetrahedron'
type Position = 'left' | 'right' | 'center'

interface ScrollReveal3DProps {
  type: ShapeType
  color?: string
  position?: Position
  size?: number
  children?: React.ReactNode
}

export default function ScrollReveal3D({ 
  type, 
  color = '#ffffff',
  position = 'left',
  size = 300,
  children 
}: ScrollReveal3DProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Pre-calculate all possible transforms at the top level
  const xLeft = useTransform(smoothProgress, [0, 0.5, 1], [-500, 0, 500])
  const rotateLeft = useTransform(smoothProgress, [0, 0.5, 1], [-180, 0, 180])
  
  const xRight = useTransform(smoothProgress, [0, 0.5, 1], [500, 0, -500])
  const rotateRight = useTransform(smoothProgress, [0, 0.5, 1], [180, 0, -180])
  
  const xCenter = useTransform(smoothProgress, [0, 0.5, 1], [0, 0, 0])
  const rotateCenter = useTransform(smoothProgress, [0, 0.5, 1], [0, 360, 720])
  
  // Select transforms based on position
  const transforms = position === 'left' 
    ? { x: xLeft, rotate: rotateLeft }
    : position === 'right'
    ? { x: xRight, rotate: rotateRight }
    : { x: xCenter, rotate: rotateCenter }
  
  const y = useTransform(smoothProgress, [0, 0.5, 1], [200, 0, -200])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.5, 1, 1, 1, 0.5])

  // Wipe effect using clip-path
  const clipPath = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    position === 'left'
      ? ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0 0 100%)']
      : position === 'right'
      ? ['inset(0 0 0 100%)', 'inset(0 0% 0 0%)', 'inset(0 0% 0 0%)', 'inset(0 100% 0 0)']
      : ['inset(100% 0 0 0)', 'inset(0% 0 0 0)', 'inset(0% 0 0 0)', 'inset(0 0 100% 0)']
  )

  return (
    <div ref={ref} className="relative w-full">
      {/* 3D Object - Floating overlay */}
      <motion.div
        style={{
          x: transforms.x,
          y,
          rotate: transforms.rotate,
          opacity,
          scale,
          clipPath,
        }}
        className={`fixed ${
          position === 'left' ? 'left-[10%]' : position === 'right' ? 'right-[10%]' : 'left-1/2 -translate-x-1/2'
        } top-1/2 -translate-y-1/2 pointer-events-none z-20`}
      >
        <div style={{ width: size, height: size }}>
          <Suspense fallback={null}>
            <Floating3DObject 
              type={type} 
              color={color}
              rotationSpeed={0.3}
              enableOrbitControls={false}
            />
          </Suspense>
        </div>
      </motion.div>

      {/* Content */}
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

