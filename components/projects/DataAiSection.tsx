import ScrollReveal from "@/components/ScrollReveal"
import ProjectCard from "./ProjectCard"

// Datos de proyectos de Data & AI
const dataAIProjects = [
  {
    id: 1,
    title: "Data_AI_Project_1",
    description: "An innovative project combining data analysis and machine learning techniques.",
    image: "/placeholder.svg?height=200&width=400&text=Data_AI_Project_1",
    link: "#",
  },
  {
    id: 2,
    title: "Data_AI_Project_2",
    description: "An innovative project combining data analysis and machine learning techniques.",
    image: "/placeholder.svg?height=200&width=400&text=Data_AI_Project_2",
    link: "#",
  },
]

export default function DataAISection() {
  return (
    <section id="data-ai" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Data_Analysis_&_AI_Projects</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataAIProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
