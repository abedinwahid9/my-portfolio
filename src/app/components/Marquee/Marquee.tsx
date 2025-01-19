"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // Speed in pixels/second
  gap?: number; // Gap between repeated content
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  gap = 20,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState<number>(0);

  // Measure the width of the marquee content
  useEffect(() => {
    if (marqueeRef.current) {
      const width = marqueeRef.current.getBoundingClientRect().width;
      setMarqueeWidth(width);
    }
  }, [children]); // Recalculate if children change

  const animationDuration = marqueeWidth ? marqueeWidth / speed : 0;

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="flex gap-14"
        initial={{ x: 0 }}
        animate={{
          x: -marqueeWidth - gap,
        }}
        transition={{
          repeat: Infinity,
          duration: animationDuration,
          ease: "linear",
        }}
        style={{ width: "100%" }}
      >
        <div
          ref={marqueeRef}
          className="flex gap-14 flex-[0_0_auto] flex-shrink-0 justify-center items-center"
        >
          {children}
        </div>
        <div className="flex gap-14 flex-[0_0_auto] flex-shrink-0 justify-center items-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
