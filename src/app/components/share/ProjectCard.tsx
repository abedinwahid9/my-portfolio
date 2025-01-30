"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import demo from "@/assets/demo.png";
import html from "../../../../public/icons/icons8-html-480.png";
import css from "../../../../public/icons/icons8-css3-480.png";
import bootstrap from "../../../../public/icons/icons8-bootstrap-480.png";
import express from "../../../../public/icons/icons8-express-js-500.png";
import tailwind from "../../../../public/icons/icons8-tailwindcss-480.png";
import mongoose from "../../../../public/icons/icons8-mongoose-480.png";

const ProjectCard: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const description: string = `   Excited to share my latest project: This product has used Html, Css,
            Css framework Tailwind css, Vanilla javascript. This website fully
            responsive tablet and mobile screen`;

  const cardVariants = {
    // default: { x: 10, zIndex: 1 },
    start: {
      x: [10, 60, 10], // Moves right on hover
      transition: {
        duration: 1,
        ease: "easeIn",
      },
      zIndex: 9999,
    },
    animate: {
      x: [10, 65, 10],
      zIndex: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      className="w-[320px] h-[400px]   rounded-3xl bg-[#50aab86e] relative z-0 shadow-lg "
    >
      {/* Card right bar */}
      <div className="md:w-[60px] h-[320px] w-[40px]  bg-[#50aab86e] absolute top-5 left-0 z-40 rounded-r-full drop-shadow-2xl"></div>
      <motion.div
        variants={cardVariants}
        // initial="default"
        animate={hover ? "start" : "animate"}
        className=" h-[340px] w-[320px]  
     bg-gradient-to-bl from-lg-button to-dr-link  backdrop-blur-3xl
 border-dr-link border-2  
 absolute p-2 top-3 -right-1 rounded-2xl drop-shadow-2xl shadow-[inset_0px_0px_32px_-15px_rgba(0,_0,_0,_5)]"
      >
        <Image
          className="w-full h-3/5 object-cover  rounded-t-xl overflow-hidden"
          src={demo}
          alt="demo"
          width={0}
          height={0}
        />
        <div className="pt-2 flex flex-col gap-2">
          <p className="text-dr-text font-semibold text-sm capitalize">
            {description?.slice(0, 90)}...
          </p>
          <p className="text-dr-text font-bold text-base capitalize flex items-center gap-2">
            <span>front end:</span>{" "}
            <div className="flex">
              <Image
                className="w-6 h-6"
                src={html}
                alt="html"
                width={0}
                height={0}
              />
              <Image
                className="w-6 h-6"
                src={css}
                alt="html"
                width={0}
                height={0}
              />
              <Image
                className="w-6 h-6"
                src={bootstrap}
                alt="html"
                width={0}
                height={0}
              />
            </div>
          </p>
          <p className="text-dr-text font-bold text-base capitalize flex items-center gap-2">
            <span>back end:</span>
            <div className="flex gap-2">
              <Image
                className="w-6 h-6"
                src={express}
                alt="html"
                width={0}
                height={0}
              />
              <Image
                className="w-6 h-6"
                src={tailwind}
                alt="html"
                width={0}
                height={0}
              />
              <Image
                className="w-6 h-6"
                src={mongoose}
                alt="html"
                width={0}
                height={0}
              />
            </div>
          </p>
        </div>
      </motion.div>
      <div className="w-full h-full flex justify-center items-end">
        <h2 className="text-dr-text font-bold text-lg pb-2 capitalize dark:text-lg-text">
          tvs - shop website
        </h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
