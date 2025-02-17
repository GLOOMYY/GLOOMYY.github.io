import Card from "@/components/Card"
import ScrollReveal from "@/components/ScrollReveal"

interface ServiceProps {
  service: {
    title: string
    description: string
  }
  index: number
}

const ServiceCard = ({ service, index }: ServiceProps) => (
  <ScrollReveal delay={index * 0.2}>
    <Card>
      <h3 className="text-xl font-semibold mb-2">&gt; {service.title}</h3>
      <p className="text-gray-700 dark:text-blue-400">{service.description}</p>
    </Card>
  </ScrollReveal>
)

export default ServiceCard
