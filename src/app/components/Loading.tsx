"use client";
import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Loading = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => {
      clearTimeout(timer);
      localStorage.setItem("loading", "true");
    };
  }, []);

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <div className="absolute w-full min-h-screen flex justify-center items-center ">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 279.47 33.95"
            className="md:w-[650px] w-72 h-44 stroke-blue-500"
          >
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M39.59,164.71v8H37V180H27.91V160.62c0-3.75,1-6.66,3.07-8.74s4.93-3.11,8.63-3.11,6.22.94,7.93,2.82,2.56,4.79,2.56,8.72V180H41V160.91a5.12,5.12,0,0,0-.42-2.47,1.63,1.63,0,0,0-1.52-.7c-1.42,0-2.12,1.06-2.12,3.17v3.8Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M62.83,149.53v18.24q0,4.44,3.19,4.44a3.17,3.17,0,0,0,2.31-.93,3,3,0,0,0,1-2.24,3.19,3.19,0,0,0-.89-2.29,2.93,2.93,0,0,0-2.19-.93,3.87,3.87,0,0,0-2.1.81v-9.2c1-.09,1.73-.13,2.23-.13a11,11,0,0,1,8.07,3.39,11.2,11.2,0,0,1,3.36,8.17,11.07,11.07,0,0,1-3.41,8.24,11.89,11.89,0,0,1-13.27,2.25,11,11,0,0,1-3.92-2.94,12.57,12.57,0,0,1-2.68-8.33V149.53Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M103.3,170.22H90.65a6,6,0,0,1-.3-1.76,6.12,6.12,0,0,1,.41-2.19H95a2.63,2.63,0,0,0-2.79-2.48,3.06,3.06,0,0,0-2.55,1.33,5.62,5.62,0,0,0-1,3.41,5.94,5.94,0,0,0,.95,3.5,2.92,2.92,0,0,0,2.49,1.34,3.33,3.33,0,0,0,2.41-1.25l4.75,5.71a11.61,11.61,0,0,1-7.38,2.62,11.39,11.39,0,0,1-8.33-3.33,11.75,11.75,0,0,1,0-16.5A11.46,11.46,0,0,1,92,157.25a11.24,11.24,0,0,1,11.43,11.41Q103.39,169.16,103.3,170.22Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M120.47,149.53h8.35v18.55a12.57,12.57,0,0,1-2.68,8.33,11,11,0,0,1-3.92,2.94A11.89,11.89,0,0,1,109,177.1a11,11,0,0,1-3.41-8.22,11.23,11.23,0,0,1,3.39-8.15,10.91,10.91,0,0,1,8-3.43c.5,0,1.24,0,2.24.13v9.2a3.33,3.33,0,0,0-2.06-.81,3,3,0,0,0-2.22,1,3.16,3.16,0,0,0-.92,2.29,3,3,0,0,0,1,2.22,3.18,3.18,0,0,0,2.3.93q3.21,0,3.21-4.44Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M141.57,157.74V180h-8.35V157.74Zm-4.16-9.93a4.13,4.13,0,0,1,2.94,1.19,3.79,3.79,0,0,1,1.24,2.83,3.75,3.75,0,0,1-1.17,2.85,4.59,4.59,0,0,1-6,0,3.75,3.75,0,0,1-1.17-2.85,3.79,3.79,0,0,1,1.24-2.83A4.09,4.09,0,0,1,137.41,147.81Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M166.32,180H158V167.43c0-1.28-.52-1.92-1.58-1.92s-1.56.64-1.56,1.92V180h-8.35V167.59a10.17,10.17,0,0,1,2.88-7.34,10,10,0,0,1,14.71.48c1.5,1.81,2.25,4.31,2.25,7.53Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M214.88,149.53v21.94a9.31,9.31,0,0,1-2.48,6.7,8.46,8.46,0,0,1-6.41,2.59,7.93,7.93,0,0,1-7.23-4.31,10.21,10.21,0,0,1-3.3,3.32,8.81,8.81,0,0,1-4.36,1,7.76,7.76,0,0,1-6.29-2.59c-1.46-1.73-2.19-4.21-2.19-7.46V149.53h9.06v19.82a5,5,0,0,0,.24,1.94.94.94,0,0,0,1,.47c.89,0,1.34-.75,1.34-2.25v-20h9.06v19.82a4.81,4.81,0,0,0,.25,1.92,1,1,0,0,0,1,.49c.89,0,1.33-.8,1.33-2.41V149.53Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M232.11,171.65v8.64a10.89,10.89,0,0,1-1.87.18,11.48,11.48,0,0,1-8.38-3.3,11.64,11.64,0,0,1,8.26-19.87q5.41,0,8.52,3.16c2.08,2.1,3.12,5,3.12,8.62V180h-8.35V169.69a4.33,4.33,0,0,0-.86-2.82,2.85,2.85,0,0,0-2.31-1.05,3.28,3.28,0,0,0-3.24,3.24,3.15,3.15,0,0,0,.87,2.28,3,3,0,0,0,2.21.89A3.74,3.74,0,0,0,232.11,171.65Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M255,149.53v9.31a7.19,7.19,0,0,1,4.24-1.54,6.2,6.2,0,0,1,5.1,2.32,9.65,9.65,0,0,1,1.89,6.27V180h-8.35V168.24a4.08,4.08,0,0,0-.3-1.92,1.26,1.26,0,0,0-1.17-.5c-.94,0-1.41.7-1.41,2.08V180h-8.35V149.53Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M279.42,157.74V180h-8.35V157.74Zm-4.16-9.93A4.13,4.13,0,0,1,278.2,149a3.79,3.79,0,0,1,1.24,2.83,3.75,3.75,0,0,1-1.17,2.85,4.59,4.59,0,0,1-6,0,3.75,3.75,0,0,1-1.17-2.85,3.79,3.79,0,0,1,1.24-2.83A4.09,4.09,0,0,1,275.26,147.81Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M298,149.53h8.34v18.55a12.62,12.62,0,0,1-2.67,8.33,11.1,11.1,0,0,1-3.92,2.94,11.89,11.89,0,0,1-13.27-2.25,11,11,0,0,1-3.42-8.22,11.23,11.23,0,0,1,3.39-8.15,10.91,10.91,0,0,1,8-3.43c.49,0,1.23,0,2.23.13v9.2a3.31,3.31,0,0,0-2.05-.81,3,3,0,0,0-2.22,1,3.17,3.17,0,0,0-.93,2.29,3,3,0,0,0,1,2.22,3.19,3.19,0,0,0,2.3.93c2.14,0,3.22-1.48,3.22-4.44Z"
              transform="translate(-27.41 -147.31)"
              className="fill-none stroke-current stroke-2"
            />
          </svg>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
