'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} id="about" className="relative bg-white text-black py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-light mb-8" id="about">
              Creative by nature.
              <br />Designer by choice.
            </h2>
            <p className="text-xl leading-relaxed opacity-70 mb-6">
              I'm Shraddha, also known as Chawal in the creative community.
            </p>
            <p className="text-lg leading-relaxed opacity-70">
              From orchestrating political campaigns to building social buzz for hackathons with 500+ participants, 
              I transform ideas into impactful visual stories that resonate and drive action.
            </p>
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square bg-gradient-to-br from-black to-zinc-700 rounded-lg overflow-hidden relative"
            >
              <Image
                src="/shraddha.jpg"
                alt="Shraddha - Creative Designer"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Multi-Disciplinary Approach
            </h3>
            <p className="text-lg leading-relaxed opacity-70">
              Whether it's crafting campaign strategies, designing social media content, or building brand identities,
              I bring a holistic approach to every project. My work spans political campaigns, tech events, 
              and personal branding - each with its unique challenges and creative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Results-Driven Creativity
            </h3>
            <p className="text-lg leading-relaxed opacity-70">
              Beautiful design is just the start. I focus on creating work that drives real results - 
              whether it's 500+ hackathon registrations, successful campaign outcomes, or engaged social communities. 
              Every project is measured by its impact, not just its aesthetics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

