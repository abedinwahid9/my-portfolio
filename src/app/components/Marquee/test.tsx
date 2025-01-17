"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? [-contentWidth, 0] : [0, -contentWidth],
        }}
        transition={{
          duration: contentWidth / speed,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        <div ref={contentRef}>{children}</div>
      </motion.div>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? [0, -contentWidth] : [-contentWidth, 0],
        }}
        transition={{
          duration: contentWidth / speed,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        <div>{children}</div>
      </motion.div>
    </div>
  );
};
