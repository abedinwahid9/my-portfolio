"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Small inner ball */}
      <motion.div
        animate={{
          top: cursorPos.y - 5, // Adjust for centering
          left: cursorPos.x - 5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="fixed w-3 h-3 rounded-full bg-dr-button pointer-events-none z-[9999]"
      />

      {/* Larger outer circle */}
      <motion.div
        animate={{
          top: cursorPos.y - 15, // Adjust for centering
          left: cursorPos.x - 15,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="fixed w-8 h-8 rounded-full border border-dr-button pointer-events-none z-[9998]"
      />
    </>
  );
};

export default CustomCursor;
