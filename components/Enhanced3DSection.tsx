'use client'

import { useRef, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

const Floating3DObject = dynamic(() => import('./Floating3DObject'), { ssr: false })

export default function Enhanced3DSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Pre-calculate all transforms at the top level
  const x1 = useTransform(scrollYProgress, [0, 1], [-400, 400])
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 720])
  
  const x2 = useTransform(scrollYProgress, [0, 1], [400, -400])
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, -360])
  
  const x3 = useTransform(scrollYProgress, [0, 1], [-300, 300])
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [180, 540])
  
  const clipPath1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0 0 100%)']
  )
  
  const clipPath2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['inset(0 0 0 100%)', 'inset(0 0% 0 0%)', 'inset(0 0% 0 0%)', 'inset(0 100% 0 0)']
  )
  
  const clipPath3 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0 0 100%)']
  )

  // Multiple 3D objects with different animations
  const objects = [
    {
      type: 'cube' as const,
      color: '#4a9eff',
      x: x1,
      y: y1,
      rotate: rotate1,
      clipPath: clipPath1,
      size: 180,
    },
    {
      type: 'torus' as const,
      color: '#ff4a9e',
      x: x2,
      y: y2,
      rotate: rotate2,
      clipPath: clipPath2,
      size: 160,
    },
    {
      type: 'cone' as const,
      color: '#4aff9e',
      x: x3,
      y: y3,
      rotate: rotate3,
      clipPath: clipPath3,
      size: 140,
    },
  ]

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Multiple floating objects */}
      {objects.map((obj, index) => {

        return (
          <motion.div
            key={index}
            style={{
              x: obj.x,
              y: obj.y,
              rotate: obj.rotate,
              opacity,
              clipPath: obj.clipPath,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          >
            <div style={{ width: obj.size, height: obj.size }}>
              <Suspense fallback={null}>
                <Floating3DObject 
                  type={obj.type} 
                  color={obj.color}
                  rotationSpeed={0.3 + index * 0.1}
                />
              </Suspense>
            </div>
          </motion.div>
        )
      })}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 text-center text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-light"
        >
          Crafted with
          <br />
          <span className="italic font-serif">precision</span>
        </motion.h2>
      </motion.div>
    </section>
  )
}

