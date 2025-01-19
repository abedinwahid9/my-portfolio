"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  containerVariants,
  itemVariants,
  navVariants,
  paperVariants,
} from "./animation/navAllAnimation";
import { logoVariants } from "./animation/mainLogo";
import Theme from "./Theme/Theme";

interface NavLink {
  id: number;
  title: string;
  link: string;
}

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();
  const navLink: NavLink[] = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "about me", link: "/about-me" },
    { id: 3, title: "project", link: "/project" },
    { id: 4, title: "skills", link: "/skills" },
    { id: 5, title: "contact me", link: "/contact-me" },
  ];

  // window anywhere click navbar close
  useEffect(() => {
    const handleClickOutside = () => {
      if (open) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="py-5 xl:px-10 md:px-5 px-3 sticky top-0 w-full z-50">
      <nav className="max-w-[1440px]  mx-auto flex justify-between items-center overflow-hidden">
        <div className="order-2 md:order-1 flex justify-center items-center gap-4">
          <Theme />{" "}
          <div>
            {" "}
            {/* desktop nav */}
            <ul className="md:flex hidden gap-5">
              {navLink?.map(({ id, title, link }) => (
                <motion.li
                  whileHover={path !== link ? { scale: 1.05 } : {}}
                  key={id}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  custom={id}
                  className="dark:text-lg-text text-dr-text text-xl  font-medium capitalize font-playfairDisplay"
                >
                  <Link
                    className={` ${path === link ? "active" : "line-hover"}`}
                    href={link}
                  >
                    {title}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <button
              className="text-lg-button w-10 h-10 flex md:hidden"
              onClick={() => setOpen(!open)}
            >
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Top line */}
                <motion.path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    x: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Middle line */}
                <motion.path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    x: [0, -2, 2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Bottom line */}
                <motion.path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    x: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            </button>
            {/* mobile nav */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                  className="fixed  md:hidden top-0 left-0 right-0 z-40 overflow-hidden"
                >
                  <div className="flex justify-end"></div>
                  <motion.nav
                    variants={paperVariants}
                    className="dark:bg-lg-primary bg-dr-primary drop-shadow-2xl "
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2350AAB8' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "bottom",
                    }}
                  >
                    <ul className="flex flex-col items-center pb-10 pt-3 space-y-4">
                      <button
                        className="text-lg-button w-10 h-10"
                        onClick={() => setOpen(!open)}
                      >
                        <motion.svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* First Diagonal Line (Moving between cross and straight line) */}
                          <motion.path
                            d="M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{
                              pathLength: [0, 1, 0], // Animate from 0 (no line) to 1 (full line) and back to 0
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 0.5, // Start a little later to sync with the horizontal line
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                          />

                          {/* Second Diagonal Line (Moving between cross and straight line) */}
                          <motion.path
                            d="M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{
                              pathLength: [0, 1, 0], // Animate from 0 (no line) to 1 (full line) and back to 0
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 0.5, // Sync with the first diagonal line
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                          />
                        </motion.svg>
                      </button>
                      {navLink.map((item, index) => (
                        <motion.li
                          key={item.id}
                          whileHover={path !== item.link ? { scale: 1.05 } : {}}
                          custom={index}
                          variants={itemVariants}
                          className="dark:text-lg-text text-dr-text text-xl  font-medium capitalize font-playfairDisplay"
                        >
                          <Link
                            href={item.link}
                            className={` ${
                              path === item.link ? "active" : "line-hover"
                            }`}
                          >
                            {item.title}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="md:order-2 order-1 "
        >
          <Image className="w-36 h-full " src={logo} alt="logo" />
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
