'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shraddhachawla1508@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('9899727395')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
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

          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="group relative px-12 py-6 border border-white rounded-full text-xl overflow-hidden"
            >
              <span className="relative z-10">
                {copied ? 'Email Copied!' : 'Copy Email'}
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? 'Copied!' : 'shraddhachawla1508@gmail.com'}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyPhone}
              className="group relative px-12 py-6 border border-white rounded-full text-xl overflow-hidden"
            >
              <span className="relative z-10">
                {copiedPhone ? 'Phone Copied!' : 'Copy Phone'}
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
                {copiedPhone ? 'Copied!' : '+91 9899727395'}
              </span>
            </motion.button>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-8 justify-center text-lg"
          >
            <motion.a
              href="https://instagram.com/shraddha.snaps"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:opacity-70 transition-opacity"
            >
              Instagram @shraddha.snaps
            </motion.a>
            <motion.a
              href="mailto:shraddhachawla1508@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="hover:opacity-70 transition-opacity"
            >
              Email
            </motion.a>
          </motion.div>

          {/* Contact Info Display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 text-sm opacity-60"
          >
            <p>shraddhachawla1508@gmail.com</p>
            <p className="mt-2">+91 9899727395</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
