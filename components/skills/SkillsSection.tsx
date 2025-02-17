import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJs, FaMicrosoft, FaDatabase, FaCloud, FaFileExcel, FaChartBar } from "react-icons/fa"
import { SiTypescript, SiPandas, SiTensorflow, SiScikitlearn, SiPostgresql, SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { BsDatabase } from "react-icons/bs"
import { AiOutlineConsoleSql } from "react-icons/ai"
import ScrollReveal from "@/components/ScrollReveal"
import SkillCard from "./SkillCard"

// Datos de habilidades
const skillsData = [
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
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Skills</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
