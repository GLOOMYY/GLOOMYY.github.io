import { Github, Linkedin, Instagram } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Footer() {
  return (
    <footer className="bg-white/90 dark:bg-black/90 text-center py-12 border-t border-gray-200 dark:border-blue-400">
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/GLOOMYY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-transform hover:scale-110"
          >
            <Github className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-mesa-460361226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.instagram.com/sebasmesamont/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-transform hover:scale-110"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        <p className="mt-6 text-gray-600 dark:text-blue-400">&gt; © 2025 GLOOMYY All_rights_reserved.</p>
    </footer>
  )
}
