"use client"

import { useEffect, useRef } from "react"

interface MatrixRainProps {
  theme: "light" | "dark"
}

export default function MatrixRain({ theme }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix rain characters
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + // Letras latinas
      "0123456789@#$%^&*" + // Números y símbolos básicos
      "囧囱卄㊎㊋㊌㊏" + // Caracteres asiáticos y "Matrix-style"
      "∡∢∤∥∦∧∨⊕⊗⊘⊥⌈⌉⌊⌋∂∇ℵ∬∭∮" + // Símbolos matemáticos
      "⫍⫎⫏⫐⫑⫒⫓⫔⫕⨀⨁⨂⨆⨌" + // Símbolos de computación
      "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ" + // Letras griegas
      "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ" + // Letras rusas
      "א ב ג ד ה ו ז ח ט י ك ل م ن ס ע פ צ ق ר ש ת" + // Hebreo y árabe
      "अ आ इ ई उ ऊ ऋ" + // Sánscrito
      "亜兇兎兜冗凡凶凸凹刃刈刊刎刑刖列劣勃勇匁卜卩" // Más caracteres asiáticos
    const charArray = chars.split("")
    const fontSize = 14
    const columns = canvas.width / fontSize

    // Array to track the y position of each column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    // Drawing function
    function draw() {
      // Black or white BG with opacity for fade effect
      ctx.fillStyle = theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Blue text for both themes
      ctx.fillStyle = theme === "dark" ? "#60A5FA" : "#2563EB" // Tailwind blue-400 for dark, blue-600 for light
      ctx.font = `${fontSize}px "VT323"`

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 33) // ~30fps

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme]) // Add theme as a dependency

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

