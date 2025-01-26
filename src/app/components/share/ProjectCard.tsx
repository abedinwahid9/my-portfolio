"use client";
import { motion } from "framer-motion";
import React from "react";

const ProjectCard: React.FC = () => {
  return (
    <motion.div className="sm:w-[300px] sm:h-[400px] w-[280px] h-[300px] rounded-3xl bg-[#50aab86e] relative z-0 shadow-lg">
      {/* Card right bar */}
      <div className="sm:w-[60px] sm:h-[320px] w-[40px] h-[220px] bg-[#50aab86e] absolute top-5 left-0 z-40 rounded-r-full drop-shadow-2xl"></div>
      <motion.div
        initial={{ x: 10, zIndex: 1 }} // Initial position
        whileHover={{
          x: [10, 100, 10], // Moves right on hover
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.1,
          },
          zIndex: 9999,
        }}
        animate={{ x: [10, 100, 10], zIndex: 1 }} // Returns to initial position after hover
        className="sm:w-[300px] sm:h-[340px] w-[280px] h-[240px] bg-dr-link absolute top-3 -right-1 rounded-2xl drop-shadow-2xl"
      ></motion.div>
      <div className="w-full h-full flex justify-center items-end">
        <h2 className="text-white font-bold text-lg">Hello</h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
