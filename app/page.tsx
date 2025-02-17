"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Briefcase, Mail, User, Github, Linkedin, Instagram, Moon, Sun } from "lucide-react"
import MatrixRain from "@/components/MatrixRain"
import ScrollReveal from "@/components/ScrollReveal"
import CustomCursor from "@/components/CustomCursor"
import Header from "@/components/Header"
import HomeSection from "@/components/HomeSection"
import ProjectsSection from "@/components/projects/ProjectsSection"
import DataAISection from "@/components/projects/DataAiSection"
import SkillsSection from "@/components/skills/SkillsSection"
import ExperienceSection from "@/components/experience/ExperienceSection"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import EducationSection from "@/components/education/EducationSection"
import ServicesSection from "@/components/services/ServicesSection"

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
          <section id="education">
            <EducationSection />
          </section>
          <section id="services">
            <ServicesSection />
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

