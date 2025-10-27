'use client'

import { useRef, Suspense, useMemo } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import dynamic from 'next/dynamic'

const Floating3DObject = dynamic(() => import('./Floating3DObject'), { ssr: false })

type ShapeType = 'cube' | 'torus' | 'cone' | 'octahedron' | 'tetrahedron'

interface Floating3DDecoratorProps {
  shapes: Array<{
    type: ShapeType
    color: string
    size: number
    initialPosition: 'left' | 'right'
  }>
}

interface ShapeTransforms {
  x: MotionValue<number>
  y: MotionValue<number>
  rotate: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
  clipPath: MotionValue<string>
}

export default function Floating3DDecorator({ shapes }: Floating3DDecoratorProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  // Pre-calculate transforms for all shapes
  const shapeTransforms = useMemo(() => {
    return shapes.map((shape, index) => {
      const isLeft = shape.initialPosition === 'left'

      return {
        x: useTransform(
          smoothProgress,
          [0, 0.5, 1],
          isLeft 
            ? [-300, 100, 500] 
            : [300, -100, -500]
        ),
        y: useTransform(
          smoothProgress,
          [0, 0.5, 1],
          index % 2 === 0 
            ? [100, -50, -200]
            : [-100, 50, 200]
        ),
        rotate: useTransform(
          smoothProgress,
          [0, 1],
          isLeft ? [0, 360] : [360, 0]
        ),
        opacity: useTransform(
          smoothProgress,
          [0, 0.2, 0.8, 1],
          [0, 1, 1, 0]
        ),
        scale: useTransform(
          smoothProgress,
          [0, 0.3, 0.7, 1],
          [0.3, 1, 1, 0.3]
        ),
        clipPath: useTransform(
          smoothProgress,
          [0, 0.3, 0.7, 1],
          isLeft
            ? ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0 0 100%)']
            : ['inset(0 0 0 100%)', 'inset(0 0% 0 0%)', 'inset(0 0% 0 0%)', 'inset(0 100% 0 0)']
        )
      } as ShapeTransforms
    })
  }, [shapes, smoothProgress])

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {shapes.map((shape, index) => {
        const isLeft = shape.initialPosition === 'left'
        const transforms = shapeTransforms[index]

        return (
          <motion.div
            key={index}
            style={{
              x: transforms.x,
              y: transforms.y,
              rotate: transforms.rotate,
              opacity: transforms.opacity,
              scale: transforms.scale,
              clipPath: transforms.clipPath,
              position: 'absolute',
              top: `${20 + index * 15}%`,
              left: isLeft ? '5%' : 'auto',
              right: isLeft ? 'auto' : '5%',
              width: shape.size,
              height: shape.size,
            }}
          >
            <Suspense fallback={null}>
              <Floating3DObject 
                type={shape.type} 
                color={shape.color}
                rotationSpeed={0.2 + index * 0.1}
              />
            </Suspense>
          </motion.div>
        )
      })}
    </div>
  )
}
