"use client";

import { motion } from "framer-motion";

interface GitHubIconProps {
  size?: number;
}

const GithubSvgAni = ({ size = 28 }: GitHubIconProps) => {
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
      <motion.path
        d="M12 2C6.477 2 2 6.484 2 12.013c0 4.427 2.865 8.187 6.839 9.525.5.091.682-.217.682-.483 0-.237-.009-.865-.014-1.698-2.782.603-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.619.07-.607.07-.607 1.005.071 1.534 1.034 1.534 1.034.892 1.528 2.341 1.086 2.911.831.091-.647.35-1.086.637-1.337-2.221-.254-4.555-1.112-4.555-4.945 0-1.092.39-1.985 1.029-2.682-.103-.254-.447-1.275.097-2.656 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.85c.851.004 1.707.114 2.507.334 1.91-1.294 2.749-1.025 2.749-1.025.545 1.381.201 2.402.098 2.656.64.697 1.028 1.59 1.028 2.682 0 3.842-2.337 4.688-4.564 4.937.36.31.68.922.68 1.859 0 1.341-.012 2.42-.012 2.749 0 .268.181.578.688.481C19.138 20.197 22 16.437 22 12.013 22 6.484 17.523 2 12 2Z"
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

export default GithubSvgAni;
