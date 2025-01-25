"use client";

import { motion } from "motion/react";

import CursorBlinker from "./CursorBlinker";
import RedoAnimText from "./RedoAnimText";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const texts = [
  "Code is like humor. Explain it, it’s bad. 😄",
  "Debugging: where the fun never ends! 🐛",
  "Eat. Sleep. Code. Repeat. 💻",
  "Turning coffee into code since day one. ☕✨",
  "Great things are coded, not born. 🚀",
  "404 Error: Limit to your potential not found. 🔍",
  "Your ideas + my skills = Amazing projects! 🔥",
  "First, solve the problem. Then, write the code. 🤓",
  "Programming is thinking, not typing. 🧠",
  "Stay curious, keep coding. 🏆",
];

const TypeWriting = () => {
  return (
    <motion.div className="flex w-full py-2 select-none items-center justify-center ">
      <motion.span
        variants={itemVariants}
        className="inline h-full w-full  md:text-lg text-xs text-slate-900"
      >
        <RedoAnimText delay={1} texts={texts} />
        <CursorBlinker />
      </motion.span>
    </motion.div>
  );
};

export default TypeWriting;
