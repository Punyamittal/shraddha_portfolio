'use client'

import { useRef, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

const Complex3DModels = dynamic(() => import('./Complex3DModels'), { ssr: false })

export default function Mega3DShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Central large model
  const centerScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 2, 2, 0.5])
  const centerRotate = useTransform(scrollYProgress, [0, 1], [0, 720])
  const centerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Orbiting models
  const orbitAngle = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])
  
  const orbit1X = useTransform(orbitAngle, (value) => Math.cos(value) * 400)
  const orbit1Y = useTransform(orbitAngle, (value) => Math.sin(value) * 200)
  
  const orbit2X = useTransform(orbitAngle, (value) => Math.cos(value + Math.PI) * 400)
  const orbit2Y = useTransform(orbitAngle, (value) => Math.sin(value + Math.PI) * 200)

  const orbitOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Central large sculpture */}
      <motion.div
        style={{
          scale: centerScale,
          rotate: centerRotate,
          opacity: centerOpacity,
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
      >
        <div style={{ width: 600, height: 600 }}>
          <Suspense fallback={null}>
            <Complex3DModels 
              type="abstractSculpture"
              color="#ffffff"
              rotationSpeed={0.15}
              scale={2}
            />
          </Suspense>
        </div>
      </motion.div>

      {/* Orbiting sculpture 1 */}
      <motion.div
        style={{
          x: orbit1X,
          y: orbit1Y,
          opacity: orbitOpacity,
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
      >
        <div style={{ width: 300, height: 300 }}>
          <Suspense fallback={null}>
            <Complex3DModels 
              type="crystalCluster"
              color="#4a9eff"
              rotationSpeed={0.3}
              scale={1.2}
            />
          </Suspense>
        </div>
      </motion.div>

      {/* Orbiting sculpture 2 */}
      <motion.div
        style={{
          x: orbit2X,
          y: orbit2Y,
          opacity: orbitOpacity,
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
      >
        <div style={{ width: 300, height: 300 }}>
          <Suspense fallback={null}>
            <Complex3DModels 
              type="floatingRings"
              color="#ff4a9e"
              rotationSpeed={0.25}
              scale={1.2}
            />
          </Suspense>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: centerOpacity }}
        className="relative z-30 text-center text-white px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light mb-6"
        >
          Creative
          <br />
          <span className="italic font-serif">excellence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto"
        >
          Where design meets strategy and impact
        </motion.p>
      </motion.div>
    </section>
  )
}

