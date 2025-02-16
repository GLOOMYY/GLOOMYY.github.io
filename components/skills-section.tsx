import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Skills</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "TypeScript", icon: "/icons/typescript.svg" },
            { name: "Python", icon: "/icons/python.svg" },
            { name: "Data_Analysis", icon: "/icons/data-analysis.svg" },
            { name: "Machine_Learning", icon: "/icons/machine-learning.svg" },
            { name: "SQL", icon: "/icons/sql.svg" },
            { name: "Pandas", icon: "/icons/pandas.svg" },
            { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
            { name: "Scikit-learn", icon: "/icons/scikit-learn.svg" },
            { name: "AWS", icon: "/icons/aws.svg" },
            { name: "Docker", icon: "/icons/docker.svg" },
          ].map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.1}>
              <div className="bg-black/80 backdrop-blur-sm border border-blue-400 rounded-lg p-4 text-center">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="mx-auto mb-2 invert"
                />
                <p>&gt; {skill.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
