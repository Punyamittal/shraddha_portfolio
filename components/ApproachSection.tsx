'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const approaches = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your brand, audience, and goals. Understanding your vision is where great work begins.',
    tags: ['Research', 'Strategy', 'Insights'],
  },
  {
    number: '02',
    title: 'Ideation',
    description: 'Our team collaborates to explore creative concepts that push boundaries while staying true to your objectives.',
    tags: ['Concepting', 'Design', 'Prototyping'],
  },
  {
    number: '03',
    title: 'Execution',
    description: 'With precision and craft, we bring ideas to life through world-class production and technical excellence.',
    tags: ['Development', 'Production', 'Testing'],
  },
  {
    number: '04',
    title: 'Activation',
    description: 'We launch experiences that captivate audiences and measure impact to continuously improve and evolve.',
    tags: ['Launch', 'Analytics', 'Optimization'],
  },
]

export default function ApproachSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
          <h2 className="text-5xl md:text-7xl font-light mb-6">Our Approach</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Clarity through communication, understanding through collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="border border-white/10 p-8 h-full transition-all duration-300 hover:border-white hover:bg-white/5">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? 1.2 : 1,
                    }}
                    className="text-6xl font-light opacity-20 group-hover:opacity-100 transition-opacity"
                  >
                    {approach.number}
                  </motion.div>
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 45 : 0,
                    }}
                    className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center"
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </motion.div>
                </div>

                <h3 className="text-3xl font-light mb-4">{approach.title}</h3>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  {approach.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {approach.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

