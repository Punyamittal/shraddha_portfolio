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
            <h3 className="text-sm tracking-widest mb-4 opacity-50">PRIMARY</h3>
            <ul className="space-y-2">
              <li><a href="#approach" className="hover:underline">Approach</a></li>
              <li><a href="#clients" className="hover:underline">Clients</a></li>
              <li><a href="#awards" className="hover:underline">Awards</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
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
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">X</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
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
            <p className="mb-4">hey@Shraddha.works</p>
            <p className="text-sm opacity-50">NEW YORK CITY</p>
            <p className="text-sm opacity-50">{time}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-50"
        >
          <p>© COPYRIGHT 2025 Shraddha WORKS</p>
          <p>ALL RIGHTS RESERVED</p>
        </motion.div>
      </div>
    </footer>
  )
}

