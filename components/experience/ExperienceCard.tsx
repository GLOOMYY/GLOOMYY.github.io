import ScrollReveal from "@/components/ScrollReveal"

interface ExperienceProps {
  job: {
    title: string
    company: string
    period: string
    description: string
    technologies: JSX.Element[]
  }
  index: number
}

const ExperienceCard = ({ job, index }: ExperienceProps) => (
  <ScrollReveal delay={index * 0.2}>
    <article className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">&gt; {job.title}</h3>
      <p className="text-gray-600 dark:text-blue-300 mb-2">
        {job.company} | {job.period}
      </p>
      <p className="text-gray-700 dark:text-blue-400 mb-4">{job.description}</p>
      <div className="flex space-x-2 text-blue-600 dark:text-blue-400">
        {job.technologies.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </article>
  </ScrollReveal>
)

export default ExperienceCard
