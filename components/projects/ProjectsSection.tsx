import ScrollReveal from "@/components/ScrollReveal"
import ProjectCard from "./ProjectCard"

// Datos de proyectos web
const webProjects = [
  {
    id: 1,
    title: "Web_Project_1",
    description: "A brief description of the project and the technologies used.",
    image: "/placeholder.svg?height=200&width=400&text=Project_1",
    link: "#",
  },
  {
    id: 2,
    title: "Web_Project_2",
    description: "A brief description of the project and the technologies used.",
    image: "/placeholder.svg?height=200&width=400&text=Project_2",
    link: "#",
  },
  {
    id: 3,
    title: "Web_Project_3",
    description: "A brief description of the project and the technologies used.",
    image: "/placeholder.svg?height=200&width=400&text=Project_3",
    link: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Web_Projects</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
