import { ProjectData } from "../@types/project";

const Project: React.FC<ProjectData> = ({ title, description }: ProjectData) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">{ title }</h2>
      <p className="text-gray-700 mb-4">{ description }</p>
      <a href="#details" className="text-blue-600 hover:underline">View Project Details</a>
    </>
  )
}

export default Project;