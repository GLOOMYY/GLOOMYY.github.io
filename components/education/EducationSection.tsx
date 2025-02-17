import EducationCard from "@/components/education/EducationCard"
import CourseCard from "@/components/education/CourseCard"
import ScrollReveal from "@/components/ScrollReveal"

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "National University",
    period: "2015 - 2019",
    description: "Focused on software development, algorithms, and data structures.",
  },
]

const coursesData = [
  { id: 1, title: "Course 1", description: "Skills acquired and details.", link: "#" },
  { id: 2, title: "Course 2", description: "Skills acquired and details.", link: "#" },
  { id: 3, title: "Course 3", description: "Skills acquired and details.", link: "#" },
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
