"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y Position:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "10px",
        transformOrigin: "0%",
        backgroundColor: "#ff0088",
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollBar;
