'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from './AnimatedText'

interface TextRevealSectionProps {
  title: string
  subtitle?: string
  darkMode?: boolean
}

export default function TextRevealSection({ title, subtitle, darkMode = false }: TextRevealSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className={`relative min-h-screen w-full flex items-center justify-center py-32 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedText
          text={title}
          className={`text-5xl md:text-7xl lg:text-8xl font-light leading-tight ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`mt-8 text-lg md:text-xl opacity-70 max-w-3xl mx-auto ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}

