import ScrollReveal from "@/components/ScrollReveal"
import ServiceCard from "./ServiceCard"

// Datos de servicios
const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications.",
  },
  {
    title: "Data Analysis",
    description: "Providing insights through data visualization and analysis.",
  },
  {
    title: "Machine Learning",
    description: "Developing predictive models and AI solutions.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Services</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
