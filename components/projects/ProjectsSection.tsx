import Image from "next/image"
import ScrollReveal from "@/components/ScrollReveal"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Web_Projects</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project, index) => (
            <ScrollReveal key={project} delay={index * 0.2}>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Project_${project}`}
                  alt={`Project ${project}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">&gt; Project_{project}</h3>
                  <p className="text-gray-600 dark:text-blue-300 mb-4">
                    &gt; A brief description of the project and the technologies used.
                  </p>
                  <a href="#" className="text-blue-600 dark:text-blue-200 hover:underline">
                    &gt; View_Project
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
