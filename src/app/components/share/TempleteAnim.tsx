"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
};

export default function Template({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
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
}
