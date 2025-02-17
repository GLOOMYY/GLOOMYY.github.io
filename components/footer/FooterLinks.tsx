import { Github, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/GLOOMYY", icon: <Github />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sebasti%C3%A1n-mesa-460361226/", icon: <Linkedin />, label: "LinkedIn" },
  { href: "https://www.instagram.com/sebasmesamont/", icon: <Instagram />, label: "Instagram" },
]

const FooterLinks = () => (
  <div className="flex justify-center items-center space-x-8">
    {socialLinks.map(({ href, icon, label }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-transform hover:scale-110"
      >
        <span className="w-6 h-6 md:w-8 md:h-8">{icon}</span>
      </a>
    ))}
  </div>
)

export default FooterLinks
