'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Scene3DSection() {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Scene3D />
        </Suspense>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-light">
          Design
          <br />
          <span className="italic font-serif">with purpose.</span>
          <br />
          Create with passion.
        </h2>
      </motion.div>
    </section>
  )
}

