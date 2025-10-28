'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [weather, setWeather] = useState({ temp: '28°', condition: 'CREATIVE' })
  const [location, setLocation] = useState({ 
    city: 'DELHI, INDIA',
    lat: '28.6139° N',
    lon: '77.2090° E'
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Top info bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-24 left-0 right-0 flex justify-between px-6 md:px-12 text-xs md:text-sm"
      >
        <div className="flex items-center space-x-4">
          <span className="font-light">{location.city}</span>
          <span className="font-light">{weather.temp}</span>
          <span className="font-light">{weather.condition}</span>
        </div>
        <div className="text-right">
          <div>{location.lat}, {location.lon}</div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-8"
        >
          {/* Badge tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-xs md:text-sm"
          >
            <span className="px-4 py-2 border border-white/30 rounded-full">DESIGNER</span>
            <span className="px-4 py-2 border border-white/30 rounded-full">CREATIVE</span>
            <span className="px-4 py-2 border border-white/30 rounded-full">MARKETER</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight"
          >
            Hi, I'm
            <br />
            <span className="italic font-serif">Shraddha.</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl font-light opacity-80"
          >
            Also known as Chawal
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const projectsSection = document.getElementById('projects')
                projectsSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-8 py-4 border border-white rounded-full overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
                View My Work
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </motion.div>

      {/* Social links - bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 left-6 md:left-12 text-xs flex gap-4"
      >
        <a href="https://instagram.com/shraddha.snaps" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">@shraddha.snaps</a>
        <a href="mailto:shraddhachawla1508@gmail.com" className="cursor-pointer hover:underline">Email</a>
      </motion.div>

      {/* Tagline - bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 right-6 md:right-12 text-xs"
      >
        <div className="flex items-center space-x-2">
          <span>CREATIVE DESIGNER</span>
          <span className="text-red-500">✨</span>
        </div>
      </motion.div>
    </section>
  )
}

