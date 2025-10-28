'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TextRevealSection from '@/components/TextRevealSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import Scene3DSection from '@/components/Scene3DSection'
import ScrollReveal3D from '@/components/ScrollReveal3D'
import Floating3DDecorator from '@/components/Floating3DDecorator'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import AwardsSection from '@/components/AwardsSection'
import BrandsSection from '@/components/BrandsSection'
import StatsBar from '@/components/StatsBar'
import ApproachSection from '@/components/ApproachSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import MouseFollower from '@/components/MouseFollower'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import VideoModal from '@/components/VideoModal'

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  useEffect(() => {
    // Make function available globally for Hero button
    (window as any).openVideoModal = () => setVideoModalOpen(true)
    return () => {
      delete (window as any).openVideoModal
    }
  }, [])

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <SmoothScroll>
        <CustomCursor />
        <MouseFollower />
        <main className="relative">
          <Navigation />
          <Hero />
          
          <ScrollReveal3D type="cube" color="#ffffff" position="left" size={200}>
            <TextRevealSection
              title="Design that speaks, creates impact, and drives results."
              darkMode={false}
            />
          </ScrollReveal3D>
          
          <ScrollReveal3D type="torus" color="#000000" position="right" size={200}>
            <TextRevealSection
              title="From campaigns to communities, creativity is my language."
              darkMode={true}
            />
          </ScrollReveal3D>
          
          <Scene3DSection />
          
          <ProjectsSection />
          
          <div className="relative">
            <AboutSection />
            <Floating3DDecorator 
              shapes={[
                { type: 'octahedron', color: '#ffffff', size: 120, initialPosition: 'left' },
                { type: 'tetrahedron', color: '#000000', size: 100, initialPosition: 'right' },
              ]}
            />
          </div>
          
          <StatsBar />
          
          <SkillsSection />
          
          <div className="relative">
            <ServicesSection />
            <Floating3DDecorator 
              shapes={[
                { type: 'cone', color: '#000000', size: 120, initialPosition: 'right' },
                { type: 'cube', color: '#ffffff', size: 110, initialPosition: 'left' },
              ]}
            />
          </div>
          
          <AwardsSection />
          
          <BrandsSection />
          
          <ApproachSection />
          
          <TestimonialsSection />
          
          <ScrollReveal3D type="octahedron" color="#000000" position="center" size={200}>
            <TextRevealSection
              title="Every project tells a story. Every design sparks emotion."
              darkMode={false}
            />
          </ScrollReveal3D>
          
          <ContactSection />
          
          <Footer />
        </main>
      </SmoothScroll>
      
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
      <BackToTop />
    </>
  )
}

