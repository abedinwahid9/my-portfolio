"use client";
import { motion, spring, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

const CircleAnim = ({ img, index }: { img: StaticImageData; key: number }) => {
  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.5,
        duration: 2,
        ease: "easeInOut",
        type: spring,
        stiffness: 200,
        damping: 50,
      },
      transform: `rotate(${index * 90 + 60}deg) translate(280px) rotate(-${
        index * 90 + 60
      }deg)`,
    }),
  };

  return (
    <motion.div
      key={index}
      className="absolute"
      custom={index} // Pass index for staggered animation
      initial="hidden"
      animate="visible"
      variants={iconVariants}
    >
      <Image
        className="w-20 h-20"
        width={80}
        height={80}
        src={img}
        alt="about-me"
      />
    </motion.div>
  );
};

export default CircleAnim;
