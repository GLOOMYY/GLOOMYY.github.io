import ScrollReveal from "@/components/ScrollReveal"
import ServiceCard from "./ServiceCard"

// Service Data
const servicesData = [
  {
    title: "Data Analysis & AI Solutions",
    description: [
      "Exploratory, predictive, and real-time data analysis to extract valuable insights.",
      "AI-powered chatbots, assistants, and content generation.",
      "Clustering, forecasting, and NLP-focused AI solutions.",
      "No matter the data complexity, we find the value in it!",
    ],
  },
  {
    title: "Cloud Services & Deployment",
    description: [
      "Cloud hosting for web applications and AI models.",
      "Efficient infrastructure setup for microservices and real-time applications.",
      "Seamless deployment of APIs and AI-powered services.",
      "Scalability and reliability at every step!",
    ],
  },
  {
    title: "Full-Stack Web Development",
    description: [
      "Building static and dynamic websites with or without database connectivity.",
      "Real-time applications for monitoring, chat, and interactive dashboards.",
      "Development of secure cloud-hosted websites and CMS-integrated blogs.",
      "Creation of scalable architectures such as microservices and microfrontends.",
      "E-commerce solutions tailored for businesses of all sizes.",
      "Always open to new challenges!",
    ],
  },

  {
    title: "Technology Consulting & Mentorship",
    description: [
      "Guidance for startups, businesses, and individuals on best practices in software development.",
      "One-on-one mentorship and tailored workshops for technical skill development.",
      "Automation services to optimize workflows and eliminate inefficiencies.",
      "Helping you bridge the gap between ideas and execution!",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Services</h2>
        </ScrollReveal>
        {/* ⬇ Ajustamos el grid para 2 columnas en pantallas medianas/grandes y 1 en móviles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
