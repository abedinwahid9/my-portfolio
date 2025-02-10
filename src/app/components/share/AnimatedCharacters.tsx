"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// Define the type for Wrapper component props
interface WrapperProps {
  children: ReactNode;
}

// Wrapper to prevent word breaks
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <span style={{ display: "inline-flex", overflow: "hidden" }}>
      {children}
    </span>
  );
};

// Define the type for AnimatedCharacters component props
interface AnimatedCharactersProps {
  text: string;
}

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
const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({ text }) => {
  // Split text into words and characters
  const words = text.split(" ").map((word) => [...word, "\u00A0"]);

  return (
    <motion.div initial="hidden" animate="visible">
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
