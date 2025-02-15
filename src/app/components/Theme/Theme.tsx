"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SunIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1 }}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </motion.svg>
);

const MoonIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, rotate: 360 }}
    transition={{ duration: 1 }}
  >
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </motion.svg>
);

const Theme: React.FC<{
  setLogoColor: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setLogoColor }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mount, setMount] = useState<boolean>(false);

  // Handle theme toggle
  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    if (resolvedTheme === "dark") {
      setLogoColor(true);
    } else {
      setLogoColor(false);
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);

  // Render only when theme is resolved
  if (!mount) return null;

  return (
    <motion.button
      onClick={handleTheme}
      className="w-10 h-10 flex dark:text-yellow-500 text-black items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </motion.button>
  );
};

export default Theme;
