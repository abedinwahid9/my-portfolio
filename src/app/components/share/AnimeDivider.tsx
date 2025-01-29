"use client";

import { motion } from "framer-motion";

const AnimeDivider = () => {
  // Generate multiple lines with slightly different phases
  const totalLines = 20;
  const lines = Array.from({ length: totalLines }, (_, i) => ({
    id: i,
    offset: i * (1 / totalLines),
  }));

  return (
    <div className="w-full h-[60px] relative">
      <svg
        viewBox="0 0 1000 400"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Define gradient */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor="rgb(255, 170, 100)"
              stopOpacity="0.3"
            />
            <stop
              offset="50%"
              stopColor="rgb(255, 200, 100)"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="rgb(255, 170, 100)"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {/* Create multiple animated paths */}
        {lines.map(({ id, offset }) => (
          <motion.path
            key={id}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{
              d: `M 0 ${200 + Math.sin(offset * Math.PI) * 50} 
                   Q 250 ${150 + Math.sin((offset + 0.1) * Math.PI) * 50} 
                     500 ${200 + Math.sin((offset + 0.2) * Math.PI) * 50} 
                   Q 750 ${250 + Math.sin((offset + 0.3) * Math.PI) * 50} 
                     1000 ${200 + Math.sin((offset + 0.4) * Math.PI) * 50}`,
            }}
            animate={{
              d: [
                `M 0 ${200 + Math.sin(offset * Math.PI) * 50} 
                   Q 250 ${150 + Math.sin((offset + 0.1) * Math.PI) * 50} 
                     500 ${200 + Math.sin((offset + 0.2) * Math.PI) * 50} 
                   Q 750 ${250 + Math.sin((offset + 0.3) * Math.PI) * 50} 
                     1000 ${200 + Math.sin((offset + 0.4) * Math.PI) * 50}`,
                `M 0 ${200 + Math.sin((offset + 1) * Math.PI) * 50} 
                   Q 250 ${150 + Math.sin((offset + 1.1) * Math.PI) * 50} 
                     500 ${200 + Math.sin((offset + 1.2) * Math.PI) * 50} 
                   Q 750 ${250 + Math.sin((offset + 1.3) * Math.PI) * 50} 
                     1000 ${200 + Math.sin((offset + 1.4) * Math.PI) * 50}`,
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
              delay: offset * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimeDivider;
