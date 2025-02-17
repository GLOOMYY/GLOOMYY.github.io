import Card from "@/components/Card"
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
    <Card>
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
    </Card>
  </ScrollReveal>
)

export default ExperienceCard
