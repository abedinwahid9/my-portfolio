"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  const containerVariants = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const paperVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  // useEffect(() => {
  //   const body: HTMLHtmlElement | null = document.querySelector("html");
  //   if (open) {
  //     body.addEventListener("click", () => {
  //       setOpen(!open);
  //     });
  //   }
  // }, [open]);

  return (
    <header className="py-5 px-5 ">
      <nav className="flex justify-between items-center overflow-hidden">
        <div className="order-2 md:order-1">
          {/* desktop nav */}
          <ul className="md:flex hidden gap-5">
            {navLink?.map(({ id, title, link }) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={id}
                className="text-lg-text text-xl  font-medium capitalize font-playfairDisplay"
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
            className="text-white flex md:hidden"
            onClick={() => setOpen(!open)}
          >
            click me
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
                <div className="flex justify-end">
                  <button
                    className="text-white "
                    onClick={() => setOpen(!open)}
                  >
                    click me
                  </button>
                </div>
                <motion.nav
                  variants={paperVariants}
                  className="bg-lg-primary shadow-lg"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2350AAB8' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "bottom",
                  }}
                >
                  <ul className="flex flex-col items-center pb-10 pt-3 space-y-4">
                    {navLink.map((item, index) => (
                      <motion.li
                        key={item.id}
                        whileHover={{ scale: 1.05 }}
                        custom={index}
                        variants={itemVariants}
                        className="text-lg-text text-xl font-medium capitalize font-playfairDisplay"
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

        <Image
          className="w-36 h-full md:order-2 order-1"
          src={logo}
          alt="logo"
        />
      </nav>
    </header>
  );
};

export default Navbar;