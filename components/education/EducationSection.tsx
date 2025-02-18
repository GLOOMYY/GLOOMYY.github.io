import EducationCard from "@/components/education/EducationCard"
import CourseCard from "@/components/education/CourseCard"
import ScrollReveal from "@/components/ScrollReveal"

// Formal Education
const educationData = [
  {
    title: "Systems and Informatics Engineering",
    institution: "National University of Colombia",
    period: "2022 - Present",
    description: "Focused on software engineering, AI, machine learning, and software development.",
  },
]

// Certified Courses & Bootcamps
const coursesData = [
  {
    id: 1,
    title: "Python-Django Level 1, 2 & 3",
    description: "Comprehensive backend development training, including databases and API design.",
    institution: "Sapiencia & ITM",
    link: "#",
  },
  {
    id: 2,
    title: "Advanced Artificial Intelligence",
    description: "Specialized diploma focused on AI applications in real-world business challenges.",
    institution: "Institución Universitaria Esumer & Medellín Mayor’s Office",
    link: "#",
  },
  {
    id: 3,
    title: "IT Specialist - Python (International Certification)",
    description: [
      "Recognized certification validating skills in Python programming, debugging, and problem-solving.",
      "Issued by Certiport in collaboration with Pearson.",
    ],
    institution: "Certiport & Pearson",
    link: "#",
  },
  {
    id: 4,
    title: "Macroentrenamiento en Inteligencia Artificial (MeIA) 2023",
    description: [
      "Virtual workshop on Artificial Intelligence, conducted from June 12 to June 30, 2023.",
      "Achieved **2nd place** in the AI challenge, competing with teams across Latin America.",
    ],
    institution: "Universidad Nacional Autónoma de México (UNAM) & Red de Macro Universidades de América Latina y el Caribe",
    link: "#",
  },
  {
    id: 5,
    title: "WWC AI Bootcamp",
    description: "Intensive training on AI fundamentals and real-world implementation.",
    institution: "WWC (Women Who Code)",
    link: "#",
  },
  {
    id: 6,
    title: "Soft Skills Certification",
    description: "Enhanced leadership, teamwork, and problem-solving skills.",
    institution: "Certified by Official Program",
    link: "#",
  },
  {
    id: 7,
    title: "English Language Certification",
    description: "Advanced English proficiency certification.",
    institution: "Certified by Official Program",
    link: "#",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Education</h2>
        </ScrollReveal>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {coursesData.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
