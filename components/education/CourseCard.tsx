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
    <article className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">&gt; {course.title}</h3>
        <p className="text-gray-600 dark:text-blue-300 mb-4">{course.description}</p>
        <a href={course.link} className="text-blue-600 dark:text-blue-200 hover:underline">
          &gt; View Course
        </a>
      </div>
    </article>
  </ScrollReveal>
)

export default CourseCard
