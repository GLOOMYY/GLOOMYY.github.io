import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJs, FaMicrosoft, 
  FaDatabase, FaCloud, FaFileExcel, FaChartBar, FaChalkboardTeacher, 
  FaUserFriends, FaGraduationCap, FaChartLine, FaCode, FaGlobe, FaLightbulb 
} from "react-icons/fa";
import { 
  SiTypescript, SiPandas, SiTensorflow, SiScikitlearn, SiPostgresql, 
  SiMongodb, SiPhp 
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import ScrollReveal from "@/components/ScrollReveal";
import ExperienceCard from "./ExperienceCard";

// Experience Data
const experienceData = [
  {
    title: "IT Leader / IT Analyst",
    company: "Grupo Sinergia Empresarial",
    period: "2024 - Present",
    description: [
      "Supervising IT infrastructure to ensure system availability and efficiency.",
      "Providing software and hardware support, database administration, and data analysis.",
      "Developing web applications with Next.js and PHP, implementing AI for process automation.",
      "Proposing innovative strategies to optimize processes and drive business growth.",
    ],
    technologies: [
      <FaPython key="python" />,
      <TbBrandNextjs key="nextjs" />,
      <SiPandas key="pandas" />,
      <SiTensorflow key="tensorflow" />,
      <SiPhp key="php" />,
      <FaChartBar key="powerbi" />,
      <FaDatabase key="database" />,
      <AiOutlineConsoleSql key="sql" />,
      <SiPostgresql key="postgresql" />,
      <FaCloud key="azure" />,
    ],
  },
  {
    title: "Mentor",
    company: "Antivirus para la Deserción",
    period: "2022 - Present",
    description: [
      "Guided students and developed strategies to reduce academic dropout rates.",
      "Conducted personalized mentoring, group workshops, and study sessions.",
      "Led the expansion of the program, increasing the number of workshops and attendance.",
      "Founded the first web development study group, where students learned to build real-world projects.",
      "Promoted teamwork, effective communication, and the development of impactful teaching methodologies.",
    ],
    technologies: [
      <FaReact key="react" />,
      <TbBrandNextjs key="nextjs" />,
      <SiTypescript key="typescript" />,
      <FaPython key="python" />,
      <FaNodeJs key="nodejs" />,
      <FaChalkboardTeacher key="teacher" />,
      <FaUserFriends key="teamwork" />,
      <FaGraduationCap key="graduation" />,
      <FaCode key="code" />,
      <FaGlobe key="expansion" />,
      <FaLightbulb key="innovation" />,
    ],
  },
];

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
  );
}
