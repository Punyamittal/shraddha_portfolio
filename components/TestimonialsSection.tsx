'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Shraddha's creative vision and strategic approach to social media helped us build Y-SoC's brand presence. Her dedication to excellence is remarkable.",
    author: "Punya Mittal",
    role: "Founder",
    company: "Y-SoC"
  },
  {
    quote: "As our Social Media and Marketing Head, Shraddha brought innovative strategies and creative content that significantly elevated our brand.",
    author: "Griffin Ventures Team",
    role: "Leadership",
    company: "Griffin Ventures"
  },
  {
    quote: "Shraddha's marketing expertise as our CMO was instrumental in achieving 500+ registrations for HackHub. Her creativity and execution were exceptional.",
    author: "HackHub Team",
    role: "Organizing Committee",
    company: "HackHub Hackathon"
  },
  {
    quote: "Working with Shraddha on the Commonwealth Students Association election campaign was incredible. Her social media strategy and marketing approach were spot-on.",
    author: "Anika Joshi",
    role: "Candidate",
    company: "Commonwealth Students Association"
  },
  {
    quote: "Shraddha's contribution as a core team member brought fresh perspectives and strong execution to Griffin 2.0. A pleasure to work with.",
    author: "Griffin 2.0 Team",
    role: "Core Team",
    company: "Griffin 2.0"
  },
  {
    quote: "As an intern, Shraddha showed exceptional dedication in handling database management. Her organizational skills and attention to detail stood out.",
    author: "IYDF Team",
    role: "Management",
    company: "Indian Youth Diplomacy Forum"
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative bg-zinc-950 text-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Clients & Collaborators
          </h2>
          <p className="text-lg opacity-70">
            Organizations and people I've had the privilege to work with
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="space-y-2">
                <div className="text-xl font-light">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm opacity-60">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-xs opacity-40">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
