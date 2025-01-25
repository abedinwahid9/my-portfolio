"use client";

import { motion } from "motion/react";

interface AnimatedArrowProps {
  size?: number;
}

const ArrowSvgAni = ({ size = 28 }: AnimatedArrowProps) => {
  return (
    <motion.svg
      className="dark:stroke-dr-text stroke-lg-text"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: 0, opacity: 0.5 }}
      animate={{ x: 3, opacity: 1 }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          repeatDelay: 0.5,
        }}
      />
    </motion.svg>
  );
};

export default ArrowSvgAni;
