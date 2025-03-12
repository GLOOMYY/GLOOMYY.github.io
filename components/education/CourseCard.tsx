import Card from "@/components/Card"
import ScrollReveal from "@/components/ScrollReveal"

interface CourseProps {
  course: {
    id: number
    title: string
    description: string
    link: string
  }
  index: number
}

const CourseCard = ({ course, index }: CourseProps) => (
  <ScrollReveal delay={index * 0.2}>
    <Card>
      <h3 className="text-xl font-semibold mb-2">&gt; {course.title}</h3>
      <p className="text-gray-600 dark:text-blue-300 mb-4">{course.description}</p>
      {/* <a href={course.link} className="text-blue-600 dark:text-blue-200 hover:underline">
        &gt; View Course
      </a> */}
    </Card>
  </ScrollReveal>
)

export default CourseCard
