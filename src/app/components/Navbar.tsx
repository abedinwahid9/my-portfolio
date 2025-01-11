"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";

interface NavLink {
  id: number;
  title: string;
  link: string;
}

const Navbar = () => {
  const path = usePathname();
  const navLink: NavLink[] = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "about me", link: "/about-me" },
    { id: 3, title: "project", link: "/project" },
    { id: 4, title: "skills", link: "/skills" },
    { id: 5, title: "contact me", link: "/contact-me" },
  ];

  console.log(path);

  return (
    <header className="py-5 px-5">
      <nav className="flex justify-between items-center">
        <div className="order-2 md:order-1 ">
          <ul className="flex gap-5">
            {navLink?.map(({ id, title, link }) => {
              return (
                <li
                  key={id}
                  className="text-lg-text text-xl font-medium capitalize font-playfairDisplay"
                >
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Image
          className="w-36 h-full md:order-2 order-1 "
          src={logo}
          alt="logo"
        />
      </nav>
    </header>
  );
};

export default Navbar;
