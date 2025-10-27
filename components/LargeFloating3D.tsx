'use client'

import { useRef, Suspense } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import dynamic from 'next/dynamic'

const Complex3DModels = dynamic(() => import('./Complex3DModels'), { ssr: false })

type ComplexModelType = 'torusKnot' | 'abstractSculpture' | 'spiralTower' | 'floatingRings' | 'crystalCluster'
type Position = 'left' | 'right' | 'center'

interface LargeFloating3DProps {
  type: ComplexModelType
  color?: string
  position?: Position
  size?: number
  scale?: number
}

export default function LargeFloating3D({ 
  type, 
  color = '#ffffff',
  position = 'center',
  size = 500,
  scale = 1.5
}: LargeFloating3DProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Position based transforms for larger movements
  const getPositionTransforms = () => {
    switch (position) {
      case 'left':
        return {
          x: useTransform(smoothProgress, [0, 0.5, 1], [-600, 100, 800]),
          rotate: useTransform(smoothProgress, [0, 0.5, 1], [-180, 0, 180]),
        }
      case 'right':
        return {
          x: useTransform(smoothProgress, [0, 0.5, 1], [600, -100, -800]),
          rotate: useTransform(smoothProgress, [0, 0.5, 1], [180, 0, -180]),
        }
      case 'center':
        return {
          x: useTransform(smoothProgress, [0, 0.5, 1], [0, 0, 0]),
          rotate: useTransform(smoothProgress, [0, 0.5, 1], [0, 360, 720]),
        }
    }
  }

  const transforms = getPositionTransforms()
  const y = useTransform(smoothProgress, [0, 0.5, 1], [300, 0, -300])
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.5, 0.85, 1], [0, 1, 1, 1, 0])
  const scaleTransform = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.3, 1, 1, 1, 0.3])

  // Circular wipe for dramatic entrance
  const clipPath = useTransform(
    smoothProgress,
    [0, 0.25, 0.75, 1],
    [
      'circle(0% at 50% 50%)',
      'circle(70% at 50% 50%)',
      'circle(70% at 50% 50%)',
      'circle(0% at 50% 50%)',
    ]
  )

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        style={{
          x: transforms.x,
          y,
          rotate: transforms.rotate,
          opacity,
          scale: scaleTransform,
          clipPath,
        }}
        className={`fixed ${
          position === 'left' ? 'left-[5%]' : position === 'right' ? 'right-[5%]' : 'left-1/2 -translate-x-1/2'
        } top-1/2 -translate-y-1/2 pointer-events-none z-20`}
      >
        <div style={{ width: size, height: size }}>
          <Suspense fallback={null}>
            <Complex3DModels 
              type={type} 
              color={color}
              rotationSpeed={0.2}
              scale={scale}
            />
          </Suspense>
        </div>
      </motion.div>
    </div>
  )
}

