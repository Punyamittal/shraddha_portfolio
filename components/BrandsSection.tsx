'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
  'ELECTION CAMPAIGNS', 'HACKHUB', 'SOCIAL MEDIA STRATEGY', 'BRAND DESIGN', 
  'CONTENT CREATION', 'VISUAL IDENTITY', 'MARKETING', 'POSTERS & REELS',
  'COMMUNITY BUILDING', 'CREATIVE DIRECTION', 'INSTAGRAM GROWTH'
]

export default function BrandsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative bg-zinc-950 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Skills & Experience
          </h2>
          <p className="text-xl md:text-2xl font-light mb-4">
            bringing creativity to
          </p>
          <p className="text-3xl md:text-5xl font-light italic font-serif">
            every project.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling achievements */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            ref={scrollRef}
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-xl md:text-3xl font-light opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {achievement}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
    </section>
  )
}

