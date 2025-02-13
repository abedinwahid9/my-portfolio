"use client";

import { motion } from "framer-motion";

interface AnimatedArrowProps {
  size?: number;
}

const BackArrowSvgAni = ({ size = 28 }: AnimatedArrowProps) => {
  return (
    <motion.svg
      className="dark:stroke-dr-text stroke-lg-text"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: 0, opacity: 0.5 }}
      animate={{ x: -3, opacity: 1 }} // ✅ Moves left for backward animation
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d="M19 12H5M5 12L11 6M5 12L11 18" // ✅ Reversed arrow path
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

export default BackArrowSvgAni;
