"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-full ">
      {/* Label Animation */}
      <motion.label
        initial={{
          top: "50%",
          left: "1rem",
          fontSize: "1rem",
          color: "#9ca3af",
        }}
        animate={
          isFocused || inputValue
            ? {
                top: "-0.5rem",
                left: "0.5rem",
                fontSize: "0.75rem",
                color: "#3b82f6",
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 300 }}
        htmlFor="input"
        className="absolute pointer-events-none text-sm font-medium text-gray-500 transform -translate-y-1/2"
      >
        Enter your text
      </motion.label>

      {/* Input Field */}
      <motion.input
        id="input"
        type="text"
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder=""
        className="block w-full px-4 py-3 mt-1 text-base border-2 border-gray-300 rounded-lg focus:border-blue-500 bg-transparent focus:outline-none"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default AnimatedInput;
