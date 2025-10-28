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
    title: 'Griffin Ventures',
    category: 'Leadership Role',
    description: 'Leading social media strategy and marketing initiatives for Griffin Ventures, driving brand growth and engagement.',
    role: 'Social Media and Marketing Head',
    impact: 'Strategic brand positioning & growth',
    tags: ['Social Media Strategy', 'Marketing Leadership', 'Brand Management', 'Content Strategy'],
  },
  {
    title: 'HackHub',
    category: 'Event Marketing',
    description: 'As Chief Marketing Officer, spearheaded all marketing efforts for HackHub hackathon, creating viral content and driving massive registrations.',
    role: 'CMO (Chief Marketing Officer)',
    impact: '500+ Registrations | Viral Social Media Campaigns',
    tags: ['CMO', 'Event Marketing', 'Social Media', 'Content Creation', 'Posters & Reels'],
  },
  {
    title: 'Commonwealth Students Association - Anika Joshi Campaign',
    category: 'Political Campaign',
    description: 'Managed social media and marketing for the election campaign of Anika Joshi at Commonwealth Students Association.',
    role: 'Campaign Manager - Social Media & Marketing',
    impact: 'Successful campaign execution with high engagement',
    tags: ['Election Campaign', 'Social Media Management', 'Political Marketing', 'Strategy'],
  },
  {
    title: 'Griffin 2.0',
    category: 'Core Team',
    description: 'Served as a core team member for Griffin 2.0, contributing to key strategic decisions and performance initiatives.',
    role: 'Core Team Member',
    impact: 'Strategic contributions & team performance',
    tags: ['Core Team', 'Strategy', 'Performance', 'Collaboration'],
  },
  {
    title: 'Freelance Marketing Content Creator',
    category: 'Freelancing',
    description: 'Creating trending marketing content for social media platforms, helping brands and individuals grow their digital presence.',
    role: 'Freelance Content Creator & Strategist',
    impact: 'Viral content & trending posts',
    tags: ['Freelancing', 'Trending Content', 'Social Media Marketing', 'Digital Strategy'],
  },
  {
    title: 'Indian Youth Diplomacy Forum',
    category: 'Internship',
    description: 'Working as an intern managing database operations and organizational workflows for the forum.',
    role: 'Database Management Intern',
    impact: 'Efficient database handling & operations',
    tags: ['Internship', 'Database Management', 'Operations', 'Youth Diplomacy'],
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
          <h2 className="text-5xl md:text-7xl font-light mb-6">Experience & Projects</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            From leadership roles to campaign management, crafting impactful digital experiences
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

        {/* Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 border border-black rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                📸 View Posters & Reels Gallery
              </span>
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                📸 View Posters & Reels Gallery
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
