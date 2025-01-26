import AnimatedBtn from "../share/AnimatedBtn";
import ProjectCard from "../share/ProjectCard";
import Title from "../share/Title";
import ArrowSvgAni from "../svg/ArrowSvgAni";

const Project = () => {
  return (
    <div className=" py-10 md:px-5 px-3">
      <div className="flex md:flex-row flex-col gap-3">
        <div className="md:w-2/3 w-full">
          <Title title='"Every Project Is a Story — Here’s My Collection."' />
        </div>
        <div className="md:w-1/3 w-full">
          <AnimatedBtn
            title="skills"
            width="w-full"
            show={true}
            icon={<ArrowSvgAni />}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center py-10 content-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
