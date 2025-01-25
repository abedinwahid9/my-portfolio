"use client";
import SocialLinks from "../share/SocialLinks";
import AnimatedBtn from "../share/AnimatedBtn";
import Name from "./Name";
import Profile from "./Profile";
import TypeWriting from "../autoTyping/TypeWriting";
import Marquee from "../Marquee/Marquee";
import js from "../../../../public/icons/icons8-javascript-480.png";
import html from "../../../../public/icons/icons8-html-480.png";
import css from "../../../../public/icons/icons8-css3-480.png";
import bootstrap from "../../../../public/icons/icons8-bootstrap-480.png";
import express from "../../../../public/icons/icons8-express-js-500.png";
import tailwind from "../../../../public/icons/icons8-tailwindcss-480.png";
import mongoose from "../../../../public/icons/icons8-mongoose-480.png";
import Image from "next/image";
import ArrowSvgAni from "../svg/ArrowSvgAni";
import CloudDownloadIcon from "../svg/CloudDownloadIcon";

interface SkillLogo {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
}

const Main: React.FC = () => {
  const text = "<> Coding with Creativity, Passion, and Style </>";

  const skillLogo: SkillLogo[] = [
    {
      id: 1,
      image: html,
    },
    {
      id: 2,
      image: css,
    },
    {
      id: 3,
      image: js,
    },
    {
      id: 4,
      image: bootstrap,
    },
    {
      id: 5,
      image: tailwind,
    },
    {
      id: 6,
      image: express,
    },
    {
      id: 7,
      image: mongoose,
    },
    {
      id: 8,
      image: mongoose,
    },
    {
      id: 9,
      image: mongoose,
    },
    {
      id: 10,
      image: mongoose,
    },
    {
      id: 11,
      image: js,
    },
  ];

  return (
    <div className="w-full  flex flex-col lg:gap-16 gap-5 ">
      <div className="xl:px-10 md:px-5 px-3  gap-5 flex lg:flex-row flex-col justify-between items-center ">
        <div className="lg:order-1 order-2 ">
          <div>
            <TypeWriting />
            <Name />
            <h2 className="dark:text-lg-text text-dr-text font-bold text-[12px] sm:text-base  md:text-xl">
              Front-end Developer | MERN stack | Programming Enthusiast
            </h2>
            <p className="dark:text-lg-text text-dr-text font-bold text-[12px] sm:text-base md:text-xl">
              {text}
            </p>
          </div>
          <SocialLinks />
          <div className="flex md:gap-5 gap-3 py-2">
            <AnimatedBtn
              title="resume"
              width="md:w-2/3 w-1/2"
              icon={<CloudDownloadIcon />}
              show={true}
            />
            <AnimatedBtn
              href="/about-me"
              title="about me"
              width="md:w-1/3 w-1/2"
              icon={<ArrowSvgAni />}
              show={true}
            />
          </div>
        </div>
        <Profile />
      </div>
      <div className="pb-5">
        <Marquee baseVelocity={-2}>
          {skillLogo?.map(({ id, image }) => (
            <div key={id} className="md:w-20 md:h-20 w-14 h-14">
              <Image
                src={image}
                alt={`Skill ${id}`}
                className="object-contain w-full h-full"
                width={0}
                height={0}
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Main;
