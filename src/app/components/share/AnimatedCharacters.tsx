"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// Wrapper component to prevent word breaks
const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span
      className="upper_case"
      style={{ display: "inline-flex", overflow: "hidden" }}
    >
      {children}
    </span>
  );
};

// Motion variants for animation
const item: Variants = {
  hidden: { y: "200%" },
  visible: (index: number) => ({
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
      delay: index * 0.05, // Small delay for smooth sequential animation
    },
  }),
};

// AnimatedCharacters component
const AnimatedCharacters: React.FC<{ text: string }> = ({ text }) => {
  // Create a ref for tracking visibility
  const ref = useRef<HTMLDivElement>(null);

  // Track if the element is in view
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  // Split text into words and characters
  const words = text.split(" ").map((word) => [...word, "\u00A0"]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, wordIndex) => (
        <Wrapper key={wordIndex}>
          {word.map((char, charIndex) => (
            <motion.span
              key={charIndex}
              style={{ display: "inline-block" }}
              variants={item}
              custom={charIndex}
            >
              {char}
            </motion.span>
          ))}
        </Wrapper>
      ))}
    </motion.div>
  );
};

export default AnimatedCharacters;
