"use client"

import CustomCursor from "@/components/custom-cursor"
import MatrixRain from "@/components/matrix-rain"
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
          <section id="home">
            <HomeSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="data-ai">
            <DataAISection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="contact">
            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

