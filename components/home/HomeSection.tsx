import ScrollReveal from "@/components/ScrollReveal"
import ProfileImage from "@/components/home/ProfileImage"
import BioText from "@/components/home/BioText"

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <ScrollReveal>
        <div className="text-center bg-white/50 dark:bg-black/10 p-8 rounded-lg backdrop-blur-sm">
          <ProfileImage src="/placeholder.svg?height=160&width=160" alt="Profile picture of GLOOMYY" />
          <BioText
            name="GLOOMYY"
            roles="Full_Stack_Dev | Data_Analyst | AI_Enthusiast"
            description="&gt; Passionate about creating beautiful web applications, deriving insights from data, and leveraging
            AI to solve complex problems. Specializing in React, Node.js, Python for data analysis, and machine
            learning."
          />
        </div>
      </ScrollReveal>
    </section>
  )
}
