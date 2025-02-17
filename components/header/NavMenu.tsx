import { motion } from "framer-motion"
import { useState } from "react"

interface NavMenuProps {
  activeSection: string
  menuItems: { label: string; href: string }[]
}

const NavMenu = ({ activeSection, menuItems }: NavMenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <ul className="flex space-x-4 md:space-x-6 text-sm md:text-lg overflow-hidden justify-center flex-grow">
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          className="relative overflow-hidden"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.a
            href={item.href}
            className={`transition-all px-3 py-1 rounded relative z-10 ${
              activeSection === item.href.substring(1) ? "text-blue-600 dark:text-blue-200 font-bold" : "text-blue-400 dark:text-blue-200"
            }`}
            animate={
              hoveredIndex === index
                ? {
                    color: ["#ff0000", "#00ff00", "#0000ff", "#3b82f6"], // 🔥 Cambia entre Rojo, Verde, Azul, y VUELVE al azul original
                    textShadow: [
                      "2px 0px 0px #ff0000, -2px 0px 0px #00ff00",
                      "-2px 2px 0px #0000ff, 2px -2px 0px #3b82f6",
                      "3px -3px 0px #ff0000, -3px 3px 0px #00ff00",
                      "0px 0px 0px #3b82f6", // 🔥 Vuelve a azul en lugar de blanco
                    ],
                    x: [0, -2, 2, -3, 3, 0],
                    y: [0, 2, -2, 3, -3, 0],
                    opacity: [1, 0.8, 0.5, 1],
                  }
                : { color: "inherit", textShadow: "none", x: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.3, repeat: 2, repeatType: "mirror" }} // 🔥 Súper rápido
            aria-label={`Go to ${item.label}`}
          >
            &gt; {item.label}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  )
}

export default NavMenu
