import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "Web_Projects", href: "#projects" },
  { label: "Data_&_AI", href: "#data-ai" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const itemVariants = {
  initial: { rotateX: 0 },
  hover: { rotateX: -90 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-blue-400">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1"></div> {/* Spacer */}
        <ul className="flex space-x-4 md:space-x-6 text-sm md:text-lg overflow-x-auto justify-center flex-grow">
          {menuItems.map((item, index) => (
            <motion.li key={index} initial="initial" whileHover="hover" className="relative">
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)" }}
                variants={glowVariants}
              />
              <motion.a
                href={item.href}
                className={`hover:shadow-lg transition-shadow px-2 py-1 rounded relative z-10 ${
                  activeSection === item.href.substring(1) ? "text-blue-600 dark:text-blue-200 font-bold" : ""
                }`}
                variants={itemVariants}
              >
                &gt; {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <div className="flex-1 flex justify-end">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
