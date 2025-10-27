'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('shraddha@creative.portfolio')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Let's create something
          </h2>
          <h3 className="text-5xl md:text-8xl font-light mb-16">
            <span className="italic font-serif">amazing</span>
            <br />
            together.
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="group relative px-12 py-6 border border-white rounded-full text-xl overflow-hidden"
          >
            <span className="relative z-10">
              {copied ? 'Copied!' : 'Get In Touch'}
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
              {copied ? 'Copied!' : 'Let\'s chat!'}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

