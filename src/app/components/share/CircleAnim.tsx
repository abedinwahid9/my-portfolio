"use client";
import { motion, spring, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

const CircleAnim = ({
  img,
  index,
}: {
  img: StaticImageData;
  index: number;
}) => {
  const [translateDistance, setTranslateDistance] = useState(280); // Default desktop value

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        if (window.innerWidth > 1200) {
          setTranslateDistance(260); // Large screens
        } else if (window.innerWidth > 1000) {
          setTranslateDistance(200);
        } else {
          setTranslateDistance(140); // Mobile
        }
      });
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.4,
        duration: 2,
        ease: "easeInOut",
        type: spring,
        stiffness: 200,
        damping: 50,
      },
      transform: `rotate(${
        index * 90 + 60
      }deg) translate(${translateDistance}px) rotate(-${index * 90 + 60}deg)`,
    }),
  };

  return (
    <motion.div
      key={index}
      className="absolute"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={iconVariants}
    >
      <Image
        className="w-16 h-16 md:w-20 md:h-20 "
        width={96}
        height={96}
        src={img}
        alt="about-me"
      />
    </motion.div>
  );
};

export default CircleAnim;
