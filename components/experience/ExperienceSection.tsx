import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa"
import { SiTensorflow, SiScikitlearn } from "react-icons/si"
import { AiOutlineConsoleSql } from "react-icons/ai"
import ScrollReveal from "@/components/ScrollReveal"
import ExperienceCard from "./ExperienceCard"

// Datos de experiencia
const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: "Lead development of cutting-edge web applications using React, Node.js, and AWS.",
    technologies: [<FaReact key="react" />, <FaNodeJs key="nodejs" />, <FaAws key="aws" />],
  },
  {
    title: "Data Scientist",
    company: "AI Solutions Ltd.",
    period: "2018 - 2020",
    description: "Developed machine learning models for predictive analytics using Python and TensorFlow.",
    technologies: [<FaPython key="python" />, <SiTensorflow key="tensorflow" />, <SiScikitlearn key="scikit" />],
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    period: "2016 - 2018",
    description: "Created responsive websites and implemented backend solutions with Node.js and SQL databases.",
    technologies: [<FaReact key="react" />, <FaNodeJs key="nodejs" />, <AiOutlineConsoleSql key="sql" />],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Experience</h2>
        </ScrollReveal>

        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
