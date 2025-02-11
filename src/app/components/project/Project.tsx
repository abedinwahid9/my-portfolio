"use client";
import Link from "next/link";
import AnimatedBtn from "../share/AnimatedBtn";
import AnimeDivider from "../share/AnimeDivider";
import ProjectCard from "../share/ProjectCard/ProjectCard";
import Title from "../share/Title";
import ArrowSvgAni from "../svg/ArrowSvgAni";
import demo from "@/assets/demo.png";
import demo1 from "@/assets/demo1.png";
import demo2 from "@/assets/demo2.png";
import demo4 from "@/assets/demo4.png";
import { StaticImageData } from "next/image";

// ✅ Import Icons Correctly
import html from "../../../../public/icons/icons8-html-480.png";
import css from "../../../../public/icons/icons8-css3-480.png";
import js from "../../../../public/icons/icons8-javascript-480.png";
import tailwind from "../../../../public/icons/icons8-tailwindcss-480.png";
import express from "../../../../public/icons/icons8-express-js-500.png";
import node from "../../../../public/icons/icons8-nodejs-480.png";
import mongodb from "../../../../public/icons/mongodb.png";
import react from "../../../../public/icons/icons8-react-480.png";

// ✅ Define TypeScript Interfaces
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
  shortDescription: string;
  technology: TechnologyCategory[];
  links: Links;
}

// ✅ Correct `projects` Array with Proper Typing
export const projects: Project[] = [
  {
    id: 1,
    title: "TVS - Shop Website",
    image: [demo],
    shortDescription:
      "Excited to share my latest project: This product has used HTML, CSS, CSS framework Tailwind CSS, and Vanilla JavaScript.",
    description:
      "Excited to share my latest project: This product has used HTML, CSS, CSS framework Tailwind CSS, and Vanilla JavaScript. This website is fully responsive for tablet and mobile screens.",
    technology: [
      {
        title: "Frontend Technology",
        skills: [
          { name: "HTML", icon: html },
          { name: "CSS", icon: css },
          { name: "JavaScript", icon: js },
        ],
      },
    ],
    links: {
      client: "",
      server: "",
      live: "",
    },
  },
  {
    id: 2,
    title: "Camera - Ecommerce Shop",
    image: [demo1, demo1, demo4],
    shortDescription:
      "Excited to share my latest project: This product has used React, CSS, Tailwind, Node.js, Express, and MongoDB.",
    description: `<p>
    <span style="font-size: 18px;">Quill Rich Text Editor</span>
</p>
<p>Quill is a free,
    <a href="https://github.com/quilljs/quill/" target="_blank">open source</a> WYSIWYG editor built for the modern web.</p>
<p>Some built-in features include:</p>
<ul>
    <li>Fast and lightweight</li>
    <li>Semantic markup</li>
    <li>Cross-browser support</li>
</ul>`,
    technology: [
      {
        title: "Frontend Technology",
        skills: [
          { name: "React", icon: react },
          { name: "CSS", icon: css },
          { name: "JavaScript", icon: js },
        ],
      },
      {
        title: "Backend Technology",
        skills: [
          { name: "Node.js", icon: node },
          { name: "Express", icon: express },
        ],
      },
      {
        title: "Database",
        skills: [{ name: "MongoDB", icon: mongodb }],
      },
    ],
    links: {
      client: "https://github.com/abedinwahid9",
      server: "",
      live: "",
    },
  },
  {
    id: 3,
    title: "MERN Project | Tailwind CSS",
    image: [demo2],
    shortDescription:
      "Excited to share my latest project: This product has used React, Tailwind, Node.js, Express, and MongoDB.",
    description:
      "This innovative platform is crafted using cutting-edge technologies such as MUI, React, Node.js, Express, and MongoDB.",
    technology: [
      {
        title: "Frontend Technology",
        skills: [
          { name: "React", icon: react },
          { name: "Tailwind CSS", icon: tailwind },
        ],
      },
      {
        title: "Backend Technology",
        skills: [
          { name: "Node.js", icon: node },
          { name: "Express", icon: express },
        ],
      },
      {
        title: "Database",
        skills: [{ name: "MongoDB", icon: mongodb }],
      },
    ],
    links: {
      client: "https://github.com/abedinwahid9",
      server: "",
      live: "",
    },
  },
];

// ✅ Updated `Project` Component with Type Safety
const Project = () => {
  return (
    <div className="py-10 md:px-5 px-3 overflow-hidden">
      {/* Title and Animated Button */}
      <div className="flex md:flex-row flex-col gap-3">
        <div className="md:w-2/3 w-full">
          <Title title='"Every Project Is a Story — Here’s My Collection."' />
        </div>
        <div className="md:w-1/3 w-full">
          <AnimatedBtn
            href="/skills"
            title="Skills"
            width="w-full"
            show={true}
            icon={<ArrowSvgAni />}
          />
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="flex py-2 items-center">
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
      </div>

      {/* Project Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center py-10 place-items-center">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
