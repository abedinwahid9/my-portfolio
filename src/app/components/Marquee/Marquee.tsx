"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState<number>(0);

  // Measure the width of the marquee content
  useEffect(() => {
    if (marqueeRef.current) {
      const width = marqueeRef.current.getBoundingClientRect().width;
      setMarqueeWidth(width);
    }
  }, [children]); // Recalculate if children change

  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <motion.div
        className="flex gap-5"
        initial={{ x: 0 }}
        animate={{ x: -marqueeWidth }} // Move by the calculated width
        transition={{
          repeat: Infinity,
          duration: 50, // Adjust duration for speed
          ease: "linear",
        }}
        style={{ width: marqueeWidth * 2 }} // Double the width for seamless looping
      >
        <div
          ref={marqueeRef}
          className="flex gap-10 flex-[0_0_auto] flex-shrink-0 justify-center items-center"
        >
          {children}
        </div>
        <div className="flex gap-10 flex-[0_0_auto] flex-shrink-0 justify-center items-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
