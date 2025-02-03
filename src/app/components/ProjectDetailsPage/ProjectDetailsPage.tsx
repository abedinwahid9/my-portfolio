"use client";
import { useParams } from "next/navigation";
import { projects } from "../project/Project";
import Title from "../share/Title";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData[];
  technology: {
    frontend?: string[] | number[];
    backend?: string[] | number[];
    database?: string[] | number[];
  };
  links?: {
    client: string;
    server: string;
    live: string;
  };
}

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Convert id to a number before searching
  const project: Project | undefined = projects.find(
    (project) => project.id === Number(id)
  );

  console.log(project);

  return (
    <div className=" py-10 md:px-5 px-3 overflow-hidden">
      <div>
        <Title title={project?.title} />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
