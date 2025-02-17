import Card from "@/components/Card"
import ScrollReveal from "@/components/ScrollReveal"

interface SkillProps {
  skill: {
    name: string
    icon: JSX.Element
    level: number
  }
  index: number
}

const SkillCard = ({ skill, index }: SkillProps) => (
  <ScrollReveal delay={index * 0.1}>
    <Card>
      <div className="text-center">
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
    </Card>
  </ScrollReveal>
)

export default SkillCard
