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
  const [contentWidth, setContentWidth] = useState<number>(0);

  // Measure the width of the marquee content
  useEffect(() => {
    if (marqueeRef.current) {
      const width = marqueeRef.current.getBoundingClientRect().width;
      setContentWidth(width);
    }
  }, [children]); // Recalculate if children change

  const animationDuration = contentWidth ? (contentWidth + gap) / speed : 0;

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="flex "
        initial={{ x: 0 }}
        animate={{ x: -(contentWidth + gap) }}
        transition={{
          repeat: Infinity,
          duration: animationDuration,
          ease: "linear",
        }}
        style={{ display: "inline-flex" }}
      >
        {/* Repeated content */}
        <div
          ref={marqueeRef}
          className="flex gap-14 flex-shrink-0"
          style={{ marginRight: gap }}
        >
          {children}
        </div>
        <div className="flex gap-14 flex-shrink-0" style={{ marginRight: gap }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
