import { User, Briefcase, Mail } from "lucide-react"

const SocialLinks = () => (
  <div className="flex items-center justify-center space-x-6 mb-6">
    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
      <User className="w-8 h-8" />
    </a>
    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
      <Briefcase className="w-8 h-8" />
    </a>
    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
      <Mail className="w-8 h-8" />
    </a>
  </div>
)

export default SocialLinks
