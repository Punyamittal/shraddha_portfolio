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
    title: 'Technical Operations Manager Intern, Indian Youth Diplomacy Forum',
    category: 'Work Experience',
    description: 'Managed technical operations for online programs, discussions, and youth diplomacy events. Coordinated digital platforms and ensured smooth execution of virtual sessions and workshops.',
    role: 'Technical Operations Manager Intern',
    impact: '2024-2025',
    tags: ['Technical Operations', 'Digital Platforms', 'Workshops', 'Youth Diplomacy', 'Outreach'],
  },
  {
    title: 'Social Media Outreach - Election Campaign',
    category: 'Work Experience',
    description: 'Assisted in planning and executing social media outreach strategies for the election campaign. Created and managed digital content to increase engagement and visibility, and coordinated online communications and campaign messaging across social platforms.',
    role: 'Campaign Team for Anika Joshi, Commonwealth Youth Association',
    impact: '2025',
    tags: ['Social Media Outreach', 'Election Campaign', 'Digital Content', 'Online Communication', 'Engagement'],
  },
  {
    title: 'Social Media Head, Hackfinity',
    category: 'Work Experience',
    description: 'Led the social media team responsible for digital promotion and audience engagement. Designed and implemented content strategies for event promotion and brand visibility, and managed posts, announcements, and engagement campaigns across social platforms.',
    role: 'Social Media Head',
    impact: '2025',
    tags: ['Team Leadership', 'Content Strategy', 'Event Promotion', 'Digital Communication', 'Brand Visibility'],
  },
  {
    title: 'Social Media Team Member, Vaani',
    category: 'Work Experience',
    description: 'Manage and curate digital content to promote events and activities. Coordinate with team members to ensure consistent communication and branding, and support audience outreach through strategic social media engagement.',
    role: 'Social Media Team Member',
    impact: 'Currently',
    tags: ['Content Curation', 'Brand Communication', 'Audience Outreach', 'Social Engagement', 'Team Collaboration'],
  },
  {
    title: 'Social Media Intern, AIC GGSIPU',
    category: 'Work Experience',
    description: 'Managed social media content strategy, content planning, and audience engagement across multiple platforms. Created newsletters, event posts, reels, and promotional content for startup and innovation-focused initiatives. Assisted in content shoots, startup collaborations, lead generation, and outreach activities while supporting events such as Spark and OriginXAI through digital branding and communication efforts.',
    role: 'Social Media Intern',
    impact: 'Experience Added',
    tags: ['Content Strategy', 'Audience Engagement', 'Digital Branding', 'Lead Generation', 'Startup Outreach'],
  },
  {
    title: 'Anchor, Anugoonj',
    category: 'Work Experience',
    description: 'Hosted and anchored events, engagement sessions, and public interactions while maintaining audience engagement and stage coordination. Assisted in event communication, audience management, and creating an energetic and professional environment during organizational activities and programs.',
    role: 'Anchor',
    impact: 'Experience Added',
    tags: ['Event Hosting', 'Public Speaking', 'Audience Management', 'Stage Coordination', 'Event Communication'],
  },
  {
    title: 'Operations Handler, FoundersMixture',
    category: 'Work Experience',
    description: 'Managed operational coordination, communication, and execution of day-to-day activities to ensure smooth workflow and event management. Assisted in team coordination, outreach, scheduling, and handling operational tasks related to startup networking, collaborations, and community engagement initiatives.',
    role: 'Operations Handler',
    impact: 'Experience Added',
    tags: ['Operations Coordination', 'Team Collaboration', 'Scheduling', 'Outreach', 'Community Engagement'],
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
