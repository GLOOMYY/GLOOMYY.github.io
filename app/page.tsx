"use client"

import Image from "next/image"
import { Github, Linkedin, Instagram } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"
import CustomCursor from "@/components/custom-cursor"
import ScrollReveal from "@/components/scroll-reveal"
import Contact from "@/components/contact"
import Header from "@/components/header"
import HomeSection from "@/components/home-section"
import ProjectsSection from "@/components/projects-section"
import DataAISection from "@/components/data-ai-section"
import SkillsSection from "@/components/skills-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black/80 text-blue-400 relative cursor-custom">
      <CustomCursor />
      <MatrixRain />
      <div className="relative z-0">
        <Header />
        <main className="pt-16">
          <HomeSection />
          <ProjectsSection />
          <DataAISection />
          <SkillsSection />
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  )
}

