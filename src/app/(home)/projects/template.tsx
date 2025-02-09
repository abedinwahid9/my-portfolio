"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const template = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <motion.main
      className="max-w-[1440px] mx-auto"
      {...props}
      variants={variants}
      initial="hidden"
      animate="enter"
    >
      {children}
    </motion.main>
  );
};

export default template;
