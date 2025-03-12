import ScrollReveal from "@/components/ScrollReveal"
import ProfileImage from "@/components/home/ProfileImage"
import BioText from "@/components/home/BioText"

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <ScrollReveal>
        <div className="text-center bg-white/50 dark:bg-black/10 p-8 rounded-lg backdrop-blur-sm">
          <ProfileImage src="/user.webp?height=160&width=160" alt="Profile picture of GLOOMYY" />
          <BioText
            name="GLOOMYY"
            roles="Full-Stack Dev | AI Engineer | Cloud Architect"
            description={[
              "If you can imagine it, you can code it.",
              "Keep It Simple",
              "Fluid interfaces, efficient code, and scalable solutions.",
              "More than solving problems, we create solutions.",
              "Simplicity is engineering at its finest.",
            ]}
          />
        </div>
      </ScrollReveal>
    </section>
  )
}
