'use client'

import { motion } from 'framer-motion'

interface Skill {
  category: string
  skills: string[]
}

const skillsData: Skill[] = [
  {
    category: 'Design',
    skills: ['Brand Identity', 'Campaign Design', 'Visual Design', 'Social Media Graphics', 'Poster Design', 'Print & Digital'],
  },
  {
    category: 'Marketing',
    skills: ['Campaign Strategy', 'Social Media Marketing', 'Content Strategy', 'Event Marketing', 'Community Building'],
  },
  {
    category: 'Content Creation',
    skills: ['Reels & Video', 'Instagram Content', 'Copywriting', 'Visual Storytelling', 'Content Planning'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Adobe Creative Suite', 'Figma', 'Instagram', 'Content Management', 'Analytics'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">Skills & Expertise</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            A versatile toolkit for bringing creative visions to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-white/10 p-8 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-light mb-6 pb-4 border-b border-white/20">
                {skillSet.category}
              </h3>
              <ul className="space-y-3">
                {skillSet.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="text-sm opacity-70 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

