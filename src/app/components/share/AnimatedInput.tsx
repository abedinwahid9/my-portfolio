"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedInput = ({
  field,
  title,
  type = "text",
}: {
  field: string;
  title: string;
  type?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-full ">
      {/* Label Animation */}
      <motion.label
        initial={{
          top: "50%",
          left: "1rem",
          fontSize: "14px",
        }}
        animate={
          isFocused || inputValue
            ? {
                top: 5,
                left: 20,
                fontSize: "14px",
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 300 }}
        htmlFor="input"
        className="absolute pointer-events-none text-xs  dark:text-white font-semibold text-dr-text transform -translate-y-1/2 uppercase "
      >
        {title}
      </motion.label>

      {/* Input Field */}
      {field === "input" ? (
        <motion.input
          id="input"
          type={type}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
          className="block w-full px-4 py-4 mt-1 text-base rounded-t-3xl  bg-lg-button/20 focus:outline-none"
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.textarea
          id="input"
          rows={2}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
          className="block w-full px-4 py-4 mt-1 text-base rounded-t-3xl  bg-lg-button/20 focus:outline-none"
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default AnimatedInput;
