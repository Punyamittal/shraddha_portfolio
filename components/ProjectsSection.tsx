'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  category: string
  description: string
  role: string
  impact: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Election Marketing Campaign',
    category: 'Political Campaign',
    description: 'Led the complete design, creative direction, and marketing strategy for a successful election campaign.',
    role: 'Design Lead & Creative Director',
    impact: 'Full campaign execution from concept to delivery',
    tags: ['Campaign Design', 'Branding', 'Marketing Strategy', 'Visual Identity', 'Print & Digital'],
  },
  {
    title: 'HackHub - Hackathon Social Media',
    category: 'Event Marketing',
    description: 'Managed all social media strategy and content creation for HackHub hackathon, driving massive engagement.',
    role: 'Social Media Manager & Content Creator',
    impact: '500+ Registrations | High Engagement Rate',
    tags: ['Social Media', 'Content Strategy', 'Event Marketing', 'Community Building', 'Posters & Reels'],
  },
  {
    title: 'Personal Instagram Brand',
    category: 'Personal Branding',
    description: 'Built and managed my personal Instagram presence with consistent creative content and brand identity.',
    role: 'Content Creator & Brand Strategist',
    impact: 'Growing engaged community',
    tags: ['Content Creation', 'Personal Branding', 'Instagram Strategy', 'Visual Storytelling'],
  },
]

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative bg-white text-black py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">Featured Work</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            From political campaigns to hackathon buzz, I craft experiences that resonate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
              <div className="border border-black/10 p-8 h-full transition-all duration-300 hover:border-black hover:shadow-2xl">
                <div className="text-xs tracking-widest mb-4 opacity-50 uppercase">
                  {project.category}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  {project.title}
                </h3>
                
                <p className="text-base opacity-70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-1">Role</div>
                  <div className="text-sm opacity-70">{project.role}</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium mb-1">Impact</div>
                  <div className="text-sm opacity-70">{project.impact}</div>
                </div>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: hoveredIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-black/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-black text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-6 text-sm font-medium"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  View Details →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 border border-black/20 rounded-full">
            <span className="text-sm">📸 Posters & Reels Gallery Coming Soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

