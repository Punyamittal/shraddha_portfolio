'use client'

import { useRef, Suspense } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
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

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {shapes.map((shape, index) => {
        const isLeft = shape.initialPosition === 'left'

        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              top: `${20 + index * 15}%`,
              left: isLeft ? '5%' : 'auto',
              right: isLeft ? 'auto' : '5%',
              width: shape.size,
              height: shape.size,
            }}
            initial={{ 
              x: isLeft ? -300 : 300,
              y: index % 2 === 0 ? 100 : -100,
              opacity: 0,
              scale: 0.3,
            }}
            whileInView={{
              x: isLeft ? 100 : -100,
              y: index % 2 === 0 ? -50 : 50,
              opacity: 1,
              scale: 1,
              rotate: isLeft ? 360 : -360,
            }}
            exit={{
              x: isLeft ? 500 : -500,
              y: index % 2 === 0 ? -200 : 200,
              opacity: 0,
              scale: 0.3,
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false, amount: 0.3 }}
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
