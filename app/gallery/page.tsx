'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  alt: string
}

const mediaItems: MediaItem[] = [
  // Images
  { type: 'image', src: '/WhatsApp Image 2025-10-29 at 01.40.34_89ceaf9e.jpg', alt: 'Campaign Poster 1' },
  { type: 'image', src: '/WhatsApp Image 2025-10-29 at 01.40.34_ada88d95.jpg', alt: 'Campaign Poster 2' },
  { type: 'image', src: '/WhatsApp Image 2025-10-29 at 01.40.34_ec6dcad5.jpg', alt: 'Campaign Poster 3' },
  // Videos
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.04.01_514378c2.mp4', alt: 'Marketing Reel 1' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.04.03_00ea46af.mp4', alt: 'Marketing Reel 2' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.04.07_b3e4c96f.mp4', alt: 'Marketing Reel 3' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.04.10_b0b8943d.mp4', alt: 'Marketing Reel 4' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.04.11_895162e1.mp4', alt: 'Marketing Reel 5' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.04.14_4955dc97.mp4', alt: 'Marketing Reel 6' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.05.03_91c5cd3c.mp4', alt: 'Marketing Reel 7' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.05.03_ab13642f.mp4', alt: 'Marketing Reel 8' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.06.44_b29c7a68.mp4', alt: 'Marketing Reel 9' },
  { type: 'video', src: '/WhatsApp Video 2025-10-27 at 20.07.09_76644120.mp4', alt: 'Marketing Reel 10' },
]

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')

  const filteredMedia = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter)

  // Golden ratio constants
  const PHI = 1.618

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight cursor-pointer"
            >
              Shraddha
            </motion.div>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-white rounded-full text-sm"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-light mb-8">
              Posters &
              <br />
              <span className="italic font-serif">Reels Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto mb-8">
              Creative work across campaigns, events, and social media
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'all' 
                    ? 'bg-white text-black' 
                    : 'border border-white/30 hover:border-white'
                }`}
              >
                All ({mediaItems.length})
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('image')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'image' 
                    ? 'bg-white text-black' 
                    : 'border border-white/30 hover:border-white'
                }`}
              >
                📸 Images ({mediaItems.filter(i => i.type === 'image').length})
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('video')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'video' 
                    ? 'bg-white text-black' 
                    : 'border border-white/30 hover:border-white'
                }`}
              >
                🎬 Videos ({mediaItems.filter(i => i.type === 'video').length})
              </motion.button>
            </div>
          </motion.div>

          {/* Gallery Grid with Golden Ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, index) => {
              // Apply golden ratio sizing pattern
              const sizePattern = index % 5
              let aspectClass = 'aspect-[1/1.618]' // Default golden ratio portrait
              
              if (sizePattern === 0) {
                aspectClass = 'aspect-[1.618/1]' // Golden ratio landscape
              } else if (sizePattern === 1) {
                aspectClass = 'aspect-square' // Square for variety
              } else if (sizePattern === 2) {
                aspectClass = 'aspect-[1/1.618]' // Portrait
              } else if (sizePattern === 3) {
                aspectClass = 'aspect-[1.618/1]' // Landscape
              } else {
                aspectClass = 'aspect-[1/1.272]' // Minor golden ratio
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMedia(item)}
                  className={`relative ${aspectClass} overflow-hidden rounded-lg cursor-pointer group border border-white/10 hover:border-white/30 transition-all`}
                >
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="text-4xl"
                    >
                      {item.type === 'image' ? '🖼️' : '▶️'}
                    </motion.div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs">
                    {item.type === 'image' ? '📸 Image' : '🎬 Video'}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl opacity-50">No items found</p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 text-4xl text-white hover:text-gray-300 z-10"
            >
              ✕
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] w-full"
            >
              {selectedMedia.type === 'image' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    width={1920}
                    height={1080}
                    className="max-h-[90vh] w-auto h-auto object-contain"
                  />
                </div>
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[90vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
