import ScrollReveal from "@/components/scroll-reveal"

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Education</h2>
        </ScrollReveal>
        <div className="space-y-8">
          {[{
            title: "Bachelor of Science in Computer Science",
            institution: "National University",
            period: "2015 - 2019",
            description: "Focused on software development, algorithms, and data structures.",
          }].map((education, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">&gt; {education.title}</h3>
                <p className="text-gray-600 dark:text-blue-300 mb-2">
                  {education.institution} | {education.period}
                </p>
                <p className="text-gray-700 dark:text-blue-400 mb-4">{education.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[1, 2, 3].map((course, index) => (
            <ScrollReveal key={course} delay={index * 0.2}>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">&gt; Course_{course}</h3>
                  <p className="text-gray-600 dark:text-blue-300 mb-4">
                    &gt; A brief description of the course and the skills acquired.
                  </p>
                  <a href="#" className="text-blue-600 dark:text-blue-200 hover:underline">
                    &gt; View_Course
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
