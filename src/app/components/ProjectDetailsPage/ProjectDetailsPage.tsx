"use client";
import { useParams } from "next/navigation";
import { projects } from "../project/Project";
import Title from "../share/Title";
import { StaticImageData } from "next/image";
import TextArea from "../share/TextArea";
import SkillCard from "../share/SkillCard";
import AnimatedBtn from "../share/AnimatedBtn";
import Carousel from "../Carousel";
import BackArrowSvgAni from "../svg/BackArrowSvgAni";
import GithubSvgAni from "../svg/GithubSvgAni";
import LiveSvgAni from "../svg/LiveSvgAni";

// ✅ Define Proper TypeScript Interfaces
interface TechnologyCategory {
  title: string;
  skills: { name: string; icon: StaticImageData }[];
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
  technology: TechnologyCategory[]; // ✅ Change to array
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
            icon={<BackArrowSvgAni />}
            href="/projects"
            title="projects"
            width="w-full"
            show
          />
        </div>
      </div>

      {/* Project Image */}
      <div className="w-full h-full lg:px-5  lg:py-10 py-5 ">
        {project.image.length > 0 && <Carousel IMAGES={project.image} />}
      </div>

      {/* Project Description */}
      <div className="py-1 px-3">
        <TextArea text={project.description} />
      </div>

      {/* ✅ Fixed Project Technologies Mapping */}
      {project.technology.map((category, index) => (
        <div key={index} className=" lg:ml-4 ml-3 py-3">
          <Title title={`${category.title} :`} />
          <div className="py-4 grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 justify-center place-items-center items-center gap-3">
            {category.skills.map((skill, i) => (
              <SkillCard key={i} title={skill.name} img={skill.icon} />
            ))}
          </div>
        </div>
      ))}

      {/* Project Links */}
      {project.links && (
        <div className="py-5 grid md:grid-cols-3 grid-cols-1 gap-5">
          {Object.entries(project.links).map(([title, link], i) => (
            <AnimatedBtn
              key={i}
              title={title}
              width="w-full"
              href={link}
              show
              icon={title === "live" ? <LiveSvgAni /> : <GithubSvgAni />}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
