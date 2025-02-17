import Card from "@/components/Card"
import ScrollReveal from "@/components/ScrollReveal"

interface EducationProps {
  education: {
    title: string
    institution: string
    period: string
    description: string
  }
  index: number
}

const EducationCard = ({ education, index }: EducationProps) => (
  <ScrollReveal delay={index * 0.2}>
    <Card>
      <h3 className="text-xl font-semibold mb-2">&gt; {education.title}</h3>
      <p className="text-gray-600 dark:text-blue-300 mb-2">
        {education.institution} | {education.period}
      </p>
      <p className="text-gray-700 dark:text-blue-400">{education.description}</p>
    </Card>
  </ScrollReveal>
)

export default EducationCard
