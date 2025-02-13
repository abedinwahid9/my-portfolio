"use client";
import Link from "next/link";
import AnimatedBtn from "../share/AnimatedBtn";
import AnimeDivider from "../share/AnimeDivider";
import ProjectCard from "../share/ProjectCard/ProjectCard";
import Title from "../share/Title";
import ArrowSvgAni from "../svg/ArrowSvgAni";
import { StaticImageData } from "next/image";
// ✅ Import Icons Correctly
import html from "../../../../public/icons/icons8-html-480.png";
import js from "../../../../public/icons/icons8-javascript-480.png";
import tailwind from "../../../../public/icons/icons8-tailwindcss-480.png";
import express from "../../../../public/icons/icons8-express-js-500.png";
import node from "../../../../public/icons/icons8-nodejs-480.png";
import mongodb from "../../../../public/icons/mongodb.png";
import react from "../../../../public/icons/icons8-react-480.png";
import mui from "../../../../public/icons/mui.png";
import mongoose from "../../../../public/icons/icons8-mongoose-480.png";
import realS1 from "@/assets/Projects/realS1.png";
import realS2 from "@/assets/Projects/reals2.png";
import realS3 from "@/assets/Projects/reals3.jpg";
import realS4 from "@/assets/Projects/reals4.jpg";
import realS5 from "@/assets/Projects/reals5.png";
import realS6 from "@/assets/Projects/real6.png";
import tvs1 from "@/assets/Projects/tvs1.jpg";
import tvs2 from "@/assets/Projects/tvs2.jpg";
import tvs3 from "@/assets/Projects/tvs3.jpg";
import tvs4 from "@/assets/Projects/tvs4.jpg";
import camera1 from "@/assets/Projects/camera1.png";
import camera2 from "@/assets/Projects/cemera2.png";
import camera3 from "@/assets/Projects/camera3.png";
import camera4 from "@/assets/Projects/camera4.png";
import camera5 from "@/assets/Projects/camera5.png";

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
    title: "Camera shop | E-commerce",
    image: [camera1, camera2, camera3, camera4, camera5],
    shortDescription: "This is multi vender e-commerce web application",
    description: `This is multi vender e-commerce web application. This project has used latest technology react, tailwind css, node.js, express.js, mongodb, mongoose, react-hook-form, framer-motion, firebase, axios etc. This project has followed MVC architecture. there is used multi vendor like as admin, seller and buyer. Also there is inventory management system. 
      

      Features:
      1. Seller: Create Project, add product, delete, update all project. He check his product sales, buyer details, monthly sales report, manage all project inventory. also here has if he want specific product will not sales, he can off.
      
      2. Admin: Manage all user approval, block, buyer to seller. product approval, all data.

      3. Buyer: Buy all product, add wishlist, check buy product report etc.


      `,
    technology: [
      {
        title: "Front end Technology",
        skills: [
          { name: "React", icon: react },
          { name: "Tailwind CSS", icon: tailwind },
        ],
      },
      {
        title: "Back end Technology",
        skills: [
          { name: "Node.js", icon: node },
          { name: "Express.js", icon: express },
          { name: "Mongoose", icon: mongoose },
        ],
      },
      {
        title: "Database",
        skills: [{ name: "MongoDB", icon: mongodb }],
      },
    ],
    links: {
      client: "https://github.com/abedinwahid9/camera-shop-clients",
      server: "https://github.com/abedinwahid9/camera-shop-server",
      live: "https://camerashopbd.netlify.app",
    },
  },
  {
    id: 2,
    title: "MERN project | MUI",
    image: [realS1, realS2, realS3, realS4, realS5, realS6],
    shortDescription:
      "Excited to share my latest project: This product has used React, CSS, Tailwind, Node.js, Express, and MongoDB.",
    description: `🏡 Welcome to the Harbor Homes Real Estate website! 🏡

This innovative platform is crafted using cutting-edge technologies such as MUI, React, Node.js, Express, and MongoDB. Our goal is to provide a seamless and user-friendly experience for individuals seeking their dream homes.

🌟 **Features:**

1. **Login & Sign Up with Password Validation:**
- Users can securely log in or sign up.
- Passwords undergo thorough validation checks, ensuring robust security.
- Clear notifications guide users through any incorrect password attempts.

2. **Product Management:**
- Exclusive to clients, the platform empowers them to add and update property listings.
- Informative toast messages celebrate successful additions or updates, enhancing the user experience.

3. **Shopping Cart:**
- Accessible to logged-in clients, the shopping cart feature provides a personalized property selection experience.
- Clients can easily view and remove items from their property wishlist.

4. **User Profile:**
- Users gain insight into their personal data, fostering a tailored experience.
- Personal information is easily updatable or deletable, putting control in the hands of the user.

🔧 **Technologies Used:**

**Frontend:**
- React
- Material-UI (MUI)

**Backend:**
- Node.js
- Express

**Database:**
- MongoDB

🌐 **Links:**
Stay connected with us on our exciting journey in real estate technology!

`,
    technology: [
      {
        title: "Front end Technology",
        skills: [
          { name: "react", icon: react },
          { name: "mui", icon: mui },
        ],
      },
      {
        title: "Back end Technology",
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
      client: "https://github.com/abedinwahid9/real-state-clients",
      server: "https://github.com/abedinwahid9/real-state-server",
      live: "https://harborhomes.netlify.app",
    },
  },
  {
    id: 3,
    title: "TVS - Shop Website",
    image: [tvs1, tvs2, tvs3, tvs4],
    shortDescription:
      "Excited to share my latest project: This product has used HTML, CSS, CSS framework Tailwind CSS, and Vanilla JavaScript.",
    description:
      "Excited to share my latest project: This product has used HTML, CSS, CSS framework Tailwind CSS, and Vanilla JavaScript. This website is fully responsive for tablet and mobile screens.",
    technology: [
      {
        title: "Front end Technology",
        skills: [
          { name: "HTML", icon: html },
          { name: "TailwindCSS", icon: tailwind },
          { name: "Javascript", icon: js },
        ],
      },
    ],
    links: {
      client: "https://github.com/abedinwahid9/tvs",
      server: "#",
      live: "https://my-bike.netlify.app",
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
