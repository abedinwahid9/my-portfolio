"use client";
import { useParams } from "next/navigation";
import { projects } from "../project/Project";
import Title from "../share/Title";
import Image, { StaticImageData } from "next/image";
import TextArea from "../share/TextArea";
import SkillCard from "../share/SkillCard";
import AnimatedBtn from "../share/AnimatedBtn";

// ✅ Define Proper TypeScript Interfaces
interface Technology {
  frontend?: { name: string; icon: StaticImageData }[];
  backend?: { name: string; icon: StaticImageData }[];
  database?: { name: string; icon: StaticImageData }[];
}
interface Links {
  client?: string;
  server?: string;
  live?: string;
}

interface Project {
  id: number;
  title: string;
  image: StaticImageData[];
  description: string;
  technology: Technology;
  links: Links;
}

const ProjectDetailsPage: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;

  // Convert id to a number before searching
  const project: Project | undefined = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <div className="py-10 md:px-5 px-3 text-center">
        <h2 className="text-red-500 text-xl">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="py-10 md:px-5 px-3 overflow-hidden">
      {/* Project Title */}
      <div className="flex md:flex-row flex-col gap-3">
        <div className="md:w-2/3 w-full">
          <Title title={project.title} />
        </div>
        <div className="md:w-1/3 w-full">
          <AnimatedBtn
            href="/projects"
            title="projects"
            width="w-full"
            show={true}
            // icon={<ArrowSvgAni />}
          />
        </div>
      </div>

      {/* Project Image */}
      <div className="w-full h-full lg:px-20  lg:py-10 py-5">
        {project.image.length > 0 && (
          <Image
            className="w-full h-auto object-cover rounded-xl overflow-hidden"
            src={project.image[0]}
            alt={project.title}
            width={800} // Fixed width
            height={500} // Fixed height
          />
        )}
      </div>

      {/* Project Description */}
      <div className="py-1 px-3">
        <TextArea text={project.description} />
      </div>

      {/* Project Technologies */}

      {Object.entries(project.technology).map(([category, techList], index) => (
        <div key={index} className=" lg:ml-4 ml-3 py-3">
          <Title title={`${category} :`} />
          <div className="py-4 grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 justify-center place-items-center items-center gap-3">
            {techList?.map(
              (
                skill: { name: string; icon: StaticImageData },
                index: number
              ) => (
                <SkillCard key={index} title={skill.name} img={skill.icon} />
              )
            )}
          </div>
        </div>
      ))}

      {/* Project Links */}

      {project.links && (
        <div className="py-5 grid md:grid-cols-3 grid-cols-1 gap-5">
          {Object.entries(project.links).map(([title, link], i) => {
            return (
              <AnimatedBtn
                key={i}
                title={title}
                width="w-full"
                href={link}
                show={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
