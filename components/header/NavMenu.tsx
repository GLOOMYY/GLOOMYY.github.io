import { motion } from "framer-motion"
import { useMemo } from "react"

interface NavMenuProps {
  activeSection: string
  menuItems: { label: string; href: string }[]
}

const itemVariants = {
  initial: { rotateX: 0 },
  hover: { rotateX: -90 },
}

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
}

const NavMenu = ({ activeSection, menuItems }: NavMenuProps) => {
  const renderedMenu = useMemo(
    () =>
      menuItems.map((item, index) => (
        <motion.li key={index} initial="initial" whileHover="hover" className="relative">
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
            }}
            variants={glowVariants}
          />
          <motion.a
            href={item.href}
            className={`hover:shadow-lg transition-shadow px-2 py-1 rounded relative z-10 ${
              activeSection === item.href.substring(1) ? "text-blue-600 dark:text-blue-200 font-bold" : ""
            }`}
            variants={itemVariants}
            aria-label={`Go to ${item.label}`}
          >
            &gt; {item.label}
          </motion.a>
        </motion.li>
      )),
    [activeSection, menuItems]
  )

  return (
    <ul className="flex space-x-4 md:space-x-6 text-sm md:text-lg overflow-x-auto justify-center flex-grow">
      {renderedMenu}
    </ul>
  )
}

export default NavMenu
