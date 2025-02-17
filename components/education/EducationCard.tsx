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
    <article className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">&gt; {education.title}</h3>
      <p className="text-gray-600 dark:text-blue-300 mb-2">
        {education.institution} | {education.period}
      </p>
      <p className="text-gray-700 dark:text-blue-400">{education.description}</p>
    </article>
  </ScrollReveal>
)

export default EducationCard
