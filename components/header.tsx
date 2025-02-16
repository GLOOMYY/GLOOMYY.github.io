export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black/90 backdrop-blur-sm border-b border-blue-400">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-200 transition-colors">
              &gt; Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-200 transition-colors">
              &gt; Web_Projects
            </a>
          </li>
          <li>
            <a href="#data-ai" className="hover:text-blue-200 transition-colors">
              &gt; Data_&_AI
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-200 transition-colors">
              &gt; Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-200 transition-colors">
              &gt; Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
