"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { shadowVariants } from "../animation/animatedBtn";

interface SKILLCARD {
  title: string;
  img: string | StaticImageData;
  key: number;
}

const SkillCard: FC<SKILLCARD> = ({ title, img, key }) => {
  return (
    <motion.div
      drag
      dragDirectionLock
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
      key={key}
      className="md:w-24 w-20 md:h-24 h-20 cursor-grabbing shadow-[inset_0px_0px_10px_5px_#1E88A8] drop-shadow-2xl flex justify-center items-center flex-col relative overflow-hidden group rounded-2xl"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, -4, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        className="md:w-10 w-8 md:h-10 h-8 relative z-10 pointer-events-none"
      >
        <Image
          className="w-full h-full"
          width={40} // Set appropriate width
          height={40} // Set appropriate height
          src={img}
          alt={title}
        />
      </motion.div>

      {/* Static shadow effect */}
      <motion.div
        variants={shadowVariants}
        initial="stop"
        animate="start"
        style={{
          background:
            "radial-gradient(circle, rgba(80,170,184,1) 10%, rgba(80,170,184,0.76) 15%, rgba(80,170,184,0.01) 40%)",
          filter: "blur(3px)",
        }}
        className="w-full h-[6px] rounded-sm"
      ></motion.div>

      <p className="select-none relative z-10 capitalize font-semibold dark:text-lg-text text-dr-text text-xs md:text-base">
        {title}
      </p>

      {/* Shine overlay */}
      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent dark:via-lg-link/40 via-lg-text/60 to-transparent transform skew-x-12 transition-all duration-700 ease-in group-hover:left-full" />
    </motion.div>
  );
};

export default SkillCard;
