"use client";

import { motion } from "framer-motion";

const AnimeDivider = () => {
  return (
    <div className="w-full flex justify-center">
      {" "}
      <div className="w-2 h-10 shadow-lg shadow-lg-primary dark:shadow-dr-link rounded-full flex justify-center   overflow-hidden relative">
        <motion.div
          className="h-6 w-0.5 absolute"
          animate={{
            top: ["-40px", "calc(100% + 40px)"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            background:
              "linear-gradient(to bottom, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 1) 100%)",
            filter: "blur(1px)",
            boxShadow: "0 0 8px 2px rgba(59, 130, 246, 0.5)",
          }}
        />
      </div>
    </div>
  );
};

export default AnimeDivider;
