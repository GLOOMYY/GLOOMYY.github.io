import { useEffect, useState } from "react"
import NavMenu from "@/components/header/NavMenu"
import ThemeToggle from "@/components/header/ThemeToggle"

const menuItems = [
  { label: "Home", href: "#home" },
  // { label: "Web_Projects", href: "#projects" },
  // { label: "Data_&_AI", href: "#data-ai" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  // { label: "Content", href: "#content"},
  { label: "Contact", href: "#contact" },
]

interface HeaderProps {
  toggleTheme: () => void
  theme: string
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const sections = document.querySelectorAll("section")
        let currentSection = ""
        sections.forEach((section) => {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight
          if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            currentSection = section.getAttribute("id") || ""
          }
        })
        setActiveSection(currentSection)
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-blue-400">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1"></div> {/* Spacer */}
        <NavMenu activeSection={activeSection} menuItems={menuItems} />
        <div className="flex-1 flex justify-end">
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </nav>
    </header>
  )
}
