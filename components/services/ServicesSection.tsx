import ScrollReveal from "@/components/ScrollReveal"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Services</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: "Web Development",
            description: "Building responsive and modern web applications.",
          }, {
            title: "Data Analysis",
            description: "Providing insights through data visualization and analysis.",
          }, {
            title: "Machine Learning",
            description: "Developing predictive models and AI solutions.",
          }].map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">&gt; {service.title}</h3>
                <p className="text-gray-700 dark:text-blue-400 mb-4">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
