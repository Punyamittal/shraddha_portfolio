'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm tracking-widest mb-4 opacity-50">NAVIGATE</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Experience</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </motion.div>

          {/* Middle column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-sm tracking-widest mb-4 opacity-50">SOCIAL</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com/shraddha.snaps" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Instagram @shraddha.snaps
                </a>
              </li>
              <li>
                <a 
                  href="mailto:shraddhachawla1508@gmail.com" 
                  className="hover:underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-sm tracking-widest mb-4 opacity-50">CONTACT</h3>
            <p className="mb-2">shraddhachawla1508@gmail.com</p>
            <p className="mb-4">+91 9899727395</p>
            <p className="text-sm opacity-50">INDIA</p>
            <p className="text-sm opacity-50">{time}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
            <p>© COPYRIGHT 2025 SHRADDHA CHAWLA</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-center text-xs opacity-40"
          >
            <p>
              Made by{' '}
              <a
                href="https://www.linkedin.com/in/punyamittal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                Punya Mittal
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
