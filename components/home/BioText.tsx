interface BioTextProps {
  name: string
  roles: string
  description: string[] // 🔥 Ahora es un array de strings
}

const BioText = ({ name, roles, description }: BioTextProps) => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-2">{name}</h1>
    <p className="text-xl text-gray-600 dark:text-blue-200 mb-6">{roles}</p>
    <div className="max-w-lg mx-auto text-gray-700 dark:text-blue-300 space-y-2">
      {description.map((line, index) => (
        <p key={index}>&gt; {line}</p> // 🔥 Renderiza cada línea en un párrafo distinto
      ))}
    </div>
  </div>
)

export default BioText
