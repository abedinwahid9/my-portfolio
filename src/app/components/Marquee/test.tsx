"use client";
import { motion } from "framer-motion";
// import React, { useRef, useEffect, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  // speed?: number;
  // gap?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  // speed = 50,
  // gap = 20,
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="flex gap-10 relative   w-full"
        initial={{ x: 0 }}
        animate={{
          x: "-100%",
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        style={{ width: "100%" }}
      >
        <div
          // ref={marqueeRef}
          className="flex  flex-nowrap  w-full gap-14"
        >
          {children}
        </div>
        <div
          // ref={marqueeRef}
          className="flex flex-nowrap w-full gap-14"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
