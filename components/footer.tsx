import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/90 text-center py-12 border-t border-blue-400">
      <div>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/GLOOMYY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-mesa-460361226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/sebasmesamont/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>
        <p className="mt-6">&gt; © 2025 GLOOMYY All_rights_reserved.</p>
      </div>
    </footer>
  )
}
