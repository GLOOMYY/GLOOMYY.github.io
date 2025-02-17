interface BioTextProps {
    name: string
    roles: string
    description: string
  }
  
  const BioText = ({ name, roles, description }: BioTextProps) => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-xl text-gray-600 dark:text-blue-200 mb-6">{roles}</p>
      <p className="max-w-lg mx-auto text-gray-700 dark:text-blue-300">{description}</p>
    </div>
  )
  
  export default BioText
  