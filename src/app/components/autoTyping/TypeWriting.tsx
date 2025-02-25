"use client";
import { motion } from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import RedoAnimText from "./RedoAnimText";

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
      <h2 className="inline h-full w-full  md:text-lg text-xs text-slate-900">
        <RedoAnimText delay={1} texts={texts} />
        <CursorBlinker />
      </h2>
    </motion.div>
  );
};

export default TypeWriting;
