'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Shraddha transformed our brand vision into an immersive experience that exceeded all expectations. Their attention to detail is unmatched.",
    author: "Sarah Chen",
    role: "CMO, Tech Innovations",
    company: "Fortune 500"
  },
  {
    quote: "Working with Shraddha was a game-changer. They brought creativity, technical excellence, and strategic thinking to every aspect of our project.",
    author: "Michael Rodriguez",
    role: "Director of Marketing",
    company: "Global Retail Brand"
  },
  {
    quote: "The team's ability to blend art and technology is remarkable. They created something that not only looks beautiful but drives real results.",
    author: "Emily Thompson",
    role: "VP of Brand Experience",
    company: "Luxury Fashion House"
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
            What People Say
          </h2>
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

