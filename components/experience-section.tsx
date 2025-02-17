import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa"
import { SiTensorflow, SiScikitlearn } from "react-icons/si"
import { AiOutlineConsoleSql } from "react-icons/ai"
import ScrollReveal from "@/components/scroll-reveal"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Experience</h2>
        </ScrollReveal>
        <div className="space-y-8">
          {[
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
          ].map((job, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">&gt; {job.title}</h3>
                <p className="text-gray-600 dark:text-blue-300 mb-2">
                  {job.company} | {job.period}
                </p>
                <p className="text-gray-700 dark:text-blue-400 mb-4">{job.description}</p>
                <div className="flex space-x-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="text-blue-600 dark:text-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}