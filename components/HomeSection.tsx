import Image from "next/image"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <ScrollReveal>
        <div className="text-center bg-white/50 dark:bg-black/10 p-8 rounded-lg backdrop-blur-sm">
          <div className="mb-6 relative w-40 h-40 mx-auto">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Profile picture"
              width={160}
              height={160}
              className="rounded-lg border-2 border-gray-300 dark:border-blue-400"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">GLOOMYY</h1>
          <p className="text-xl text-gray-600 dark:text-blue-200 mb-6">Full_Stack_Dev | Data_Analyst | AI_Enthusiast</p>
          <p className="max-w-lg mx-auto text-gray-700 dark:text-blue-300">
            &gt; Passionate about creating beautiful web applications, deriving insights from data, and leveraging
            AI to solve complex problems. Specializing in React, Node.js, Python for data analysis, and machine
            learning.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
