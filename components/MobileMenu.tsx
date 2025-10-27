'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-black border-l border-white/10 z-[101] p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white hover:scale-110 transition-transform"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col space-y-8 mt-20">
              <motion.a
                href="#about"
                onClick={onClose}
                whileHover={{ x: 10 }}
                className="text-3xl font-light"
              >
                About Us
              </motion.a>
              <motion.a
                href="#services"
                onClick={onClose}
                whileHover={{ x: 10 }}
                className="text-3xl font-light"
              >
                Services
              </motion.a>
              <motion.a
                href="#awards"
                onClick={onClose}
                whileHover={{ x: 10 }}
                className="text-3xl font-light"
              >
                Awards
              </motion.a>
              <motion.a
                href="#contact"
                onClick={onClose}
                whileHover={{ x: 10 }}
                className="text-3xl font-light"
              >
                Contact
              </motion.a>
            </nav>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-sm opacity-50 mb-4">GET IN TOUCH</div>
              <a
                href="mailto:hey@Shraddha.works"
                className="text-lg hover:underline"
              >
                hey@Shraddha.works
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

