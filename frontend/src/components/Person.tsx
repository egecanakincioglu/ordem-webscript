import { PersonData } from "../@types/person"

const Person: React.FC<PersonData> = ({ fullName, role, description }: PersonData) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">{ fullName }</h2>
      <p className="text-gray-700 mb-4">{ role }</p>
      <p className="text-gray-700 mb-4">{ description }</p>
    </>
  )
}

export default Person;