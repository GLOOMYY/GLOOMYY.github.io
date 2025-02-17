import { motion } from "framer-motion"
import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <motion.div
      className="relative p-6 rounded-lg overflow-hidden bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 shadow-lg cursor-pointer"
      whileHover={{
        scale: 1.05, // 🔥 Efecto de agrandar
        rotate: 1.5, // 🔥 Ligera rotación
        y: -3, // 🔥 Se levanta un poco
        boxShadow: "0px 10px 30px rgba(0, 0, 255, 0.3)", // 🔥 Sombra azul en hover
      }}
      transition={{ duration: 0.3, ease: "easeOut" }} // 🔥 Animación fluida
    >
      {/* 🔥 Glitch en los bordes */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          borderColor: ["#ff0000", "#00ff00", "#0000ff", "#2563EB"], // 🔥 Ciclo RGB
          boxShadow: [
            "0px 0px 5px #ff0000",
            "0px 0px 5px #00ff00",
            "0px 0px 5px #0000ff",
            "0px 0px 5px #2563EB",
          ],
        }}
        transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
        }}
      />
      
      {/* Contenido dinámico */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default Card
