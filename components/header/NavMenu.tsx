import { motion } from "framer-motion"
import { useMemo } from "react"

interface NavMenuProps {
  activeSection: string
  menuItems: { label: string; href: string }[]
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.9 },
  hover: {
    opacity: 0.4, // Más suave para no ser tan agresivo
    scale: 1.2, // Menos expansión para evitar que cause overflow
    transition: {
      opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.4, type: "spring", stiffness: 250, damping: 20 },
    },
  },
}

const NavMenu = ({ activeSection, menuItems }: NavMenuProps) => {
  const renderedMenu = useMemo(
    () =>
      menuItems.map((item, index) => (
        <motion.li key={index} initial="initial" whileHover="hover" whileTap="initial" className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.08) 50%, rgba(29,78,216,0) 100%)",
            }}
            variants={glowVariants}
          />
          <motion.a
            href={item.href}
            className={`hover:text-blue-600 dark:hover:text-blue-200 transition-all px-3 py-1 rounded relative z-10 ${
              activeSection === item.href.substring(1) ? "text-blue-600 dark:text-blue-200 font-bold" : ""
            }`}
            aria-label={`Go to ${item.label}`}
          >
            &gt; {item.label}
          </motion.a>
        </motion.li>
      )),
    [activeSection, menuItems]
  )

  return (
    <ul className="flex space-x-4 md:space-x-6 text-sm md:text-lg overflow-hidden justify-center flex-grow">
      {renderedMenu}
    </ul>
  )
}

export default NavMenu
