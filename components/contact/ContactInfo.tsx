import { Mail, MapPin, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const ContactInfo = () => (
  <div className="lg:w-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 rounded-lg p-8 shadow-lg">
    <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
    <div className="space-y-6">
      <a
        href="mailto:sebas.mesa.montoya@gmail.com"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className="w-6 h-6 mr-3" />
        sebas.mesa.montoya@gmail.com
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=%2B573053438319&text&type=phone_number&app_absent=0"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-6 h-6 mr-3" />
        +57 305 343 8319
      </a>

      <a
        href="tel:+573053438319"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="w-6 h-6 mr-3" />
        +57 305 343 8319
      </a>

      <div className="flex items-center text-blue-600 dark:text-blue-400">
        <MapPin className="w-6 h-6 mr-3" />
        Medellin, Colombia
      </div>
    </div>
  </div>
)

export default ContactInfo
