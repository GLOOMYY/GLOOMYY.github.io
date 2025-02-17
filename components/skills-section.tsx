import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJs, FaMicrosoft, FaDatabase, FaCloud, FaFileExcel, FaChartBar } from "react-icons/fa"
import { SiTypescript, SiPandas, SiTensorflow, SiScikitlearn, SiPostgresql, SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { BsDatabase } from "react-icons/bs"
import { AiOutlineConsoleSql } from "react-icons/ai"
import ScrollReveal from "@/components/scroll-reveal"

export default function SkillsSection() {
  const skills = [
    { name: "React", icon: <FaReact />, level: 25 },
    { name: "Node.js", icon: <FaNodeJs />, level: 50 },
    { name: "JavaScript", icon: <FaJs />, level: 75 },
    { name: "TypeScript", icon: <SiTypescript />, level: 90 },
    { name: "Python", icon: <FaPython />, level: 75 },
    { name: "Next.js", icon: <TbBrandNextjs />, level: 70 },
    { name: "Machine Learning", icon: <BsDatabase />, level: 65 },
    { name: "SQL", icon: <AiOutlineConsoleSql />, level: 80 },
    { name: "Pandas", icon: <SiPandas />, level: 70 },
    { name: "TensorFlow", icon: <SiTensorflow />, level: 60 },
    { name: "Scikit-learn", icon: <SiScikitlearn />, level: 65 },
    { name: "AWS", icon: <FaAws />, level: 75 },
    { name: "Docker", icon: <FaDocker />, level: 70 },
    { name: "Excel", icon: <FaFileExcel />, level: 85 },
    { name: "Power BI", icon: <FaChartBar />, level: 80 },
    { name: "Power Apps", icon: <FaMicrosoft />, level: 65 },
    { name: "SQL Databases", icon: <FaDatabase />, level: 85 },
    { name: "NoSQL Databases", icon: <SiMongodb />, level: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
    { name: "Azure", icon: <FaCloud />, level: 70 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Skills</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.1}>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-4 text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level}, 100`}
                      transform="rotate(-180 18 18)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-blue-400 text-2xl">
                    {skill.icon}
                  </div>
                </div>
                <p className="text-sm">&gt; {skill.name}</p>
                <div className="flex justify-center mt-2">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className={`w-2 h-2 mx-0.5 rounded-full ${
                        dot <= Math.round(skill.level / 20) ? "bg-blue-400" : "bg-blue-900"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
