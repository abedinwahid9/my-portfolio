import Link from "next/link";
import AnimatedBtn from "../share/AnimatedBtn";
import AnimeDivider from "../share/AnimeDivider";
import ProjectCard from "../share/ProjectCard";
import Title from "../share/Title";
import ArrowSvgAni from "../svg/ArrowSvgAni";
import demo from "@/assets/demo.png";
import demo1 from "@/assets/demo1.png";
import demo2 from "@/assets/demo2.png";
export const projects = [
  {
    id: 1,
    title: "tvs - shop website",
    image: [demo],
    description:
      "Excited to share my latest project: This product has used Html, Css, Css framework Tailwind css, Vanilla javascript. This website fully responsive tablet and mobile screen",
    technology: {
      frontend: ["html", "css", "js"],
    },
    links: {
      client: "",
      server: "",
      live: "",
    },
  },
  {
    id: 2,
    title: "Camera - Ecommerce shop",
    image: [demo1],
    description:
      "The Camera E-commerce Shop is an innovative platform designed to provide a seamless experience for buyers, sellers, and administrators. This feature-rich e-commerce solution specializes in cameras and accessories, ensuring efficiency and scalability.",
    technology: {
      frontend: ["react", "css", "js"],
      backend: ["node", "express"],
      database: ["mongodb"],
    },
    links: {
      client: "",
      server: "",
      live: "",
    },
  },
  {
    id: 3,
    title: "MERN project | Tailwind Css",
    image: [demo2],
    description:
      "This innovative platform is crafted using cutting-edge technologies such as MUI, React, Node.js, Express, and MongoDB. Our goal is to provide a seamless and user-friendly experience for individuals seeking their dream homes.",
    technology: {
      frontend: ["react", "tailwind"],
      backend: ["node", "express"],
      database: ["mongodb"],
    },
    links: {
      client: "",
      server: "",
      live: "",
    },
  },
];
const Project = () => {
  return (
    <div className=" py-10 md:px-5 px-3 overflow-hidden">
      <div className="flex md:flex-row flex-col gap-3">
        <div className="md:w-2/3 w-full">
          <Title title='"Every Project Is a Story — Here’s My Collection."' />
        </div>
        <div className="md:w-1/3 w-full">
          <AnimatedBtn
            href="/skills"
            title="skills"
            width="w-full"
            show={true}
            icon={<ArrowSvgAni />}
          />
        </div>
      </div>
      <div className="flex py-2 items-center">
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center py-10 place-items-center">
        {projects?.map((project) => {
          return (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
