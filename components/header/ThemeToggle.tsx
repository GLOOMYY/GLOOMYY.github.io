import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  toggleTheme: () => void
  theme: string
}

const ThemeToggle = ({ toggleTheme, theme }: ThemeToggleProps) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />} {/* ✅ FIX: ahora se muestra correctamente */}
  </button>
)

export default ThemeToggle
