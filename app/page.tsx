"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Briefcase, Mail, User, Github, Linkedin, Instagram, Moon, Sun } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"
import ScrollReveal from "@/components/scroll-reveal"
import CustomCursor from "@/components/custom-cursor"
import Header from "@/components/header"
import HomeSection from "@/components/home-section"
import ProjectsSection from "@/components/projects-section"
import DataAISection from "@/components/data-ai-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-black/80 text-gray-900 dark:text-blue-400 relative cursor-custom transition-colors duration-300`}>
      <CustomCursor />
      <MatrixRain theme={theme} />
      <div className="relative z-0">
        <Header toggleTheme={toggleTheme} theme={theme} />
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
          <section id="experience">
            <ExperienceSection />
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

