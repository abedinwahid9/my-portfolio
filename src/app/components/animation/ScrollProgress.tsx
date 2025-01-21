"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#ff0088",
      }}
    />
  );
};

export default ScrollProgress;
