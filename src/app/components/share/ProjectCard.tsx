"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface Links {
  client?: string;
  server?: string;
  live?: string;
}

interface Technology {
  frontend?: { name: string; icon: StaticImageData }[];
  backend?: { name: string; icon: StaticImageData }[];
  database?: { name: string; icon: StaticImageData }[];
}

// ✅ Corrected PROJECTCARD interface (technology is now a single object)
interface PROJECTCARD {
  id: number;
  title: string;
  image: StaticImageData[]; // Array of images
  description: string;
  technology: Technology;
  links?: Links;
}

// ✅ Define ProjectCard component with correct props
const ProjectCard: React.FC<{ project: PROJECTCARD }> = ({ project }) => {
  const [hover, setHover] = useState<boolean>(false);

  const cardVariants = {
    start: {
      x: [10, 60, 10], // Moves right on hover
      transition: { duration: 1, ease: "easeIn" },
      zIndex: 9999,
    },
    animate: {
      x: [10, 65, 10],
      zIndex: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="w-[320px] h-[410px] rounded-3xl bg-[#50aab86e] relative z-0 shadow-lg"
    >
      {/* Card right bar */}
      <div className="md:w-[55px] h-[320px] w-[40px] bg-[#50aab86e] absolute top-5 left-0 z-40 border-dr-link border-r-2 rounded-r-full drop-shadow-2xl"></div>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        animate={hover ? "start" : "animate"}
        className="h-[350px] w-[320px] bg-gradient-to-bl from-lg-button to-dr-link backdrop-blur-3xl border-dr-link border-2 absolute p-1 top-3 rounded-2xl drop-shadow-2xl shadow-[inset_0px_0px_32px_-15px_rgba(0,_0,_0,_5)]"
      >
        {/* ✅ Project Image */}
        {project.image.length > 0 && (
          <div className="relative w-full h-3/5">
            <Image
              className="rounded-t-xl object-cover"
              src={project.image[0]} // Use first image dynamically
              alt={project.title}
              fill
              sizes="100vw"
            />
          </div>
        )}

        {/* ✅ Project Description */}
        <div className="pt-1 flex flex-col px-2">
          <p className="text-dr-text font-semibold text-sm capitalize">
            {project.description.slice(0, 70)}...
          </p>

          {/* ✅ Dynamic Skill Rendering */}
          <div className="py-1">
            {Object.entries(project.technology).map(
              ([category, techList], index) => (
                <p
                  key={index}
                  className="text-dr-text font-bold text-base capitalize flex items-center gap-2"
                >
                  <span>{category}</span>:
                  {techList?.map(
                    (
                      list: { name: string; icon: StaticImageData },
                      i: number
                    ) => (
                      <span key={i}>{list.name}</span>
                    )
                  )}
                </p>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* ✅ Project Title */}
      <div className="w-full h-full flex justify-center items-end">
        <h2 className="text-dr-text font-bold text-lg pb-2 capitalize dark:text-lg-text">
          {project.title}
        </h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
