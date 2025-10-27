'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Service {
  category: string
  title: string
  services: string[]
}

const services: Service[] = [
  {
    category: 'Experiential',
    title: 'Architecture',
    services: [
      'Creative and Design Direction',
      'Stage Design',
      'Retail Design',
      'Structural Design',
      'CAD Renders',
      'High Res 3D Mocks',
      'Fabrication Plans',
    ],
  },
  {
    category: 'Experiential',
    title: 'Spatial & Interior Design',
    services: [
      'Moodboards',
      'Wayfinding and Signage Systems',
      'AR/VR/XR Integration',
      'Environmental Design',
      'Spatial Planning',
      'Lighting Planning',
      'Material Curation',
    ],
  },
  {
    category: 'Experiential',
    title: 'Interactive / Creative Technology',
    services: [
      'Interactive Prototyping',
      'Generative Content',
      'Game Design',
      'AI Model Training',
      'Projection Mapping',
      'Reactive Environments',
      'Soundscapes & Immersive Audio',
    ],
  },
  {
    category: 'Digital',
    title: '3D Modelling',
    services: [
      'Character Design',
      'Environment Design',
      'Modelling',
      'Rigging',
      'Texturing',
      'Optimization',
      '3D Fashion',
    ],
  },
  {
    category: 'Digital',
    title: 'Motion & Animation',
    services: [
      'Storyboarding',
      'Animatics',
      'Motion Guidelines',
      'Interactive Walkthroughs',
      'Content Animation',
      'Web Animation',
      '3D Animation',
    ],
  },
  {
    category: 'Brand',
    title: 'Brand & Campaign Strategy',
    services: [
      'Consumer Insights',
      'Audience Definition',
      'Brand Positioning',
      'Ideation',
      'Strategic Consulting',
      'Copywriting & Messaging',
    ],
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-white text-black py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">Services</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            We create experiences for the world's most impactful brands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="border border-black/10 p-8 h-full transition-all duration-300 hover:border-black">
                <div className="text-xs tracking-widest mb-4 opacity-50">
                  /{service.category.toLowerCase()}
                </div>
                <h3 className="text-2xl font-light mb-6">{service.title}</h3>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: hoveredIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 text-sm opacity-70">
                    {service.services.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="mt-6 text-sm underline"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  Reach out for examples →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

