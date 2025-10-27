'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AwardProps {
  number: number
  label: string
  sublabel?: string
  delay?: number
}

function AnimatedCounter({ number, label, sublabel, delay = 0 }: AwardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, {
        duration: 2,
        delay,
        ease: 'easeOut',
      })
      return controls.stop
    }
  }, [isInView, number, delay, count])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="text-center"
    >
      <motion.div className="text-7xl md:text-9xl font-light mb-4">
        {rounded}
      </motion.div>
      <div className="text-xl md:text-2xl font-light opacity-70">{label}</div>
      {sublabel && (
        <div className="text-sm mt-2 opacity-50">{sublabel}</div>
      )}
    </motion.div>
  )
}

export default function AwardsSection() {
  return (
    <section className="relative bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            The industry has taken note.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <AnimatedCounter number={26} label="FWA Awards" sublabel="(including Site of the Year)" delay={0.1} />
          <AnimatedCounter number={11} label="Awwwards" delay={0.2} />
          <AnimatedCounter number={11} label="Webby Awards" delay={0.3} />
          <AnimatedCounter number={10} label="CSS Design Awards" sublabel="(including Site of the Day)" delay={0.4} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-32"
        >
          <h2 className="text-6xl md:text-8xl font-light leading-tight">
            we
            <br />
            <span className="italic font-serif">stimulate</span>
            <br />
            memory.
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

