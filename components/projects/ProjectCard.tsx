import Image from "next/image"
import ScrollReveal from "@/components/ScrollReveal"

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    link: string
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectProps) => (
  <ScrollReveal delay={index * 0.2}>
    <article className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">&gt; {project.title}</h3>
        <p className="text-gray-600 dark:text-blue-300 mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-600 dark:text-blue-200 hover:underline">
          &gt; View Project
        </a>
      </div>
    </article>
  </ScrollReveal>
)

export default ProjectCard
