import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { VT323 } from "next/font/google"

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "GLOOMYY - Portfolio",
  description: "Full Stack Developer, Data Analyst, and AI Enthusiast",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vt323.className}>{children}</body>
    </html>
  )
}



