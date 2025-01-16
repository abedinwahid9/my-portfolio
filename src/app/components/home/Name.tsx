"use client";

import { motion } from "framer-motion";

const Name: React.FC = () => {
  const name = "Abedin Wahid";
  const nameSplit = name.split(" ");

  const textVariants = {
    hidden: {
      y: -150,
      opacity: 0,
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: index * 0.3,
        type: "spring",
        stiffness: 150,
      },
    }),
  };

  return (
    <h2 className="relative capitalize dark:text-lg-button text-dr-button md:text-2xl sm:text-xl flex gap-2 text-md font-bold">
      <span> Hi, I&apos;m</span>
      <div className="flex gap-2">
        {nameSplit?.map((str, i) => {
          return (
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              key={i}
              custom={i}
            >
              {" "}
              {str === " " ? "\u00A0" : str}
            </motion.p>
          );
        })}
      </div>
    </h2>
  );
};

export default Name;
