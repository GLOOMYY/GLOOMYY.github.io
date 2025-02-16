import { motion } from "framer-motion";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "Web_Projects", href: "#projects" },
  { label: "Data_&_AI", href: "#data-ai" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const itemVariants = {
  initial: { rotateX: 0 },
  hover: { rotateX: -90 },
};

const backVariants = {
  initial: { rotateX: 90 },
  hover: { rotateX: 0 },
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

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm border-b border-blue-400">
      <nav className="container mx-auto px-4 py-4" aria-label="Main Navigation">
        <ul className="flex justify-center space-x-6 text-lg">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)" }}
                variants={glowVariants}
              />
              <motion.a
                href={item.href}
                className="hover:shadow-lg transition-shadow px-2 py-1 rounded relative z-10"
                variants={itemVariants}
              >
                &gt; {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
