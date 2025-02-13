"use client";

import { motion } from "framer-motion";

interface LiveLinkIconProps {
  size?: number;
}

const LiveSvgAni = ({ size = 28 }: LiveLinkIconProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dark:stroke-dr-text stroke-lg-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Outer Circle */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Link Icon */}
      <motion.path
        d="M10 14L14 10M8.5 15.5C7.70435 14.7043 7.25 13.6789 7.25 12.5C7.25 11.3211 7.70435 10.2957 8.5 9.5L10.5 7.5C11.2957 6.70435 12.3211 6.25 13.5 6.25C14.6789 6.25 15.7043 6.70435 16.5 7.5C17.2957 8.29565 17.75 9.32113 17.75 10.5C17.75 11.6789 17.2957 12.7043 16.5 13.5L14.5 15.5C13.7043 16.2957 12.6789 16.75 11.5 16.75C10.3211 16.75 9.29565 16.2957 8.5 15.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  );
};

export default LiveSvgAni;
