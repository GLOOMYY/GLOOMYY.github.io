import { motion } from "framer-motion"
import { ReactNode, useState } from "react"

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative p-6 rounded-lg overflow-hidden bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 shadow-lg cursor-pointer"
      animate={isHovered ? { scale: 1.03 } : { scale: 1 }} // 🔥 Mantiene el zoom mientras el hover está activo
      transition={{ duration: 0.2, ease: "easeOut" }} // 🔥 Transición más suave
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🔥 Glitch en los bordes SOLO al iniciar el Hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ borderColor: "transparent", boxShadow: "none" }}
        animate={
          isHovered
            ? {
                borderColor: ["#ff0000", "#00ff00", "#0000ff", "#3b82f6", "transparent"], // 🔥 RGB solo una vez
                boxShadow: [
                  "0px 0px 3px #ff0000",
                  "0px 0px 3px #00ff00",
                  "0px 0px 3px #0000ff",
                  "0px 0px 3px #3b82f6",
                  "none",
                ],
              }
            : { borderColor: "transparent", boxShadow: "none" }
        }
        transition={{ duration: 0.15 }} // 🔥 Se ejecuta una sola vez
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
        }}
      />

      {/* 🔥 Contenido con glitch SOLO al inicio del Hover */}
      <motion.div
        className="relative z-10"
        initial={{ color: "inherit", textShadow: "none" }}
        animate={
          isHovered
            ? {
                color: ["#ff0000", "#00ff00", "#0000ff", "#3b82f6", "inherit"], // 🔥 RGB una vez
                textShadow: [
                  "1px 0px 0px #ff0000, -1px 0px 0px #00ff00",
                  "-1px 1px 0px #0000ff, 1px -1px 0px #3b82f6",
                  "1px -1px 0px #ff0000, -1px 1px 0px #00ff00",
                  "none",
                ],
              }
            : { color: "inherit", textShadow: "none" }
        }
        transition={{ duration: 0.5 }} // 🔥 Solo se ejecuta al inicio del hover
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Card
