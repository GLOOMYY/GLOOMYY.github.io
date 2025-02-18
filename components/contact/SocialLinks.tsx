import { User, Briefcase, Mail } from "lucide-react"

const SocialLinks = () => (
  <div className="flex items-center justify-center space-x-6 mb-6">
    <a 
      href="https://github.com/GLOOMYY" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
    >
      <User className="w-8 h-8" />
    </a>

    <a 
      href="https://api.whatsapp.com/send/?phone=%2B573053438319&text&type=phone_number&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
    >
      <Briefcase className="w-8 h-8" />
    </a>

    <a 
      href="mailto:sebas.mesa.montoya@gmail.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
    >
      <Mail className="w-8 h-8" />
    </a>
  </div>
)

export default SocialLinks
