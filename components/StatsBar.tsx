'use client'

import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '500+', label: 'HackHub Registrations' },
  { value: '3+', label: 'Major Campaigns' },
  { value: '100%', label: 'Passion & Dedication' },
  { value: '∞', label: 'Creative Ideas' },
]

export default function StatsBar() {
  return (
    <section className="relative bg-white text-black py-16 border-y border-black/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                className="text-4xl md:text-5xl font-light mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

