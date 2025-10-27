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
import Revolving3DOrbit from '@/components/Revolving3DOrbit'
import Enhanced3DSection from '@/components/Enhanced3DSection'
import LargeFloating3D from '@/components/LargeFloating3D'
import Mega3DShowcase from '@/components/Mega3DShowcase'
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
          
          <ScrollReveal3D type="cube" color="#ffffff" position="left" size={350}>
            <TextRevealSection
              title="Design that speaks, creates impact, and drives results."
              darkMode={false}
            />
          </ScrollReveal3D>
          
          <ScrollReveal3D type="torus" color="#4a9eff" position="right" size={350}>
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
                { type: 'octahedron', color: '#888888', size: 200, initialPosition: 'left' },
                { type: 'tetrahedron', color: '#666666', size: 150, initialPosition: 'right' },
              ]}
            />
          </div>
          
          <StatsBar />
          
          <SkillsSection />
          
          <div className="relative">
            <ServicesSection />
            <LargeFloating3D type="floatingRings" color="#aaaaaa" position="right" size={500} scale={1.6} />
            <Floating3DDecorator 
              shapes={[
                { type: 'cone', color: '#999999', size: 180, initialPosition: 'right' },
                { type: 'cube', color: '#777777', size: 160, initialPosition: 'left' },
              ]}
            />
          </div>
          
          <AwardsSection />
          
          <BrandsSection />
          
          <Mega3DShowcase />
          
          <Enhanced3DSection />
          
          <div className="relative">
            <LargeFloating3D type="crystalCluster" color="#ffffff" position="center" size={550} scale={2} />
            <Revolving3DOrbit type="torus" color="#ffffff" size={250} orbitRadius={400} />
            <ApproachSection />
          </div>
          
          <TestimonialsSection />
          
          <ScrollReveal3D type="octahedron" color="#000000" position="center" size={400}>
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

