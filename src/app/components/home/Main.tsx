"use client";
import SocialLinks from "../share/SocialLinks";
import AnimatedBtn from "../share/AnimatedBtn";
import Name from "./Name";
import Profile from "./Profile";
import TypeWriting from "../autoTyping/TypeWriting";
import Marquee from "../Marquee/Marquee";
import Image from "next/image";
import ArrowSvgAni from "../svg/ArrowSvgAni";
import CloudDownloadIcon from "../svg/CloudDownloadIcon";
import html from "../../../../public/icons/icons8-html-480.png";
import css from "../../../../public/icons/icons8-css3-480.png";
import js from "../../../../public/icons/icons8-javascript-480.png";
import bootstrap from "../../../../public/icons/icons8-bootstrap-480.png";
import tailwind from "../../../../public/icons/icons8-tailwindcss-480.png";
import express from "../../../../public/icons/icons8-express-js-500.png";
import figma from "../../../../public/icons/icons8-figma-480.png";
import photoshop from "../../../../public/icons/icons8-photoshop-480.png";
import illustrator from "../../../../public/icons/icons8-adobe-illustrator-480.png";
import npm from "../../../../public/icons/icons8-npm-480.png";
import node from "../../../../public/icons/icons8-nodejs-480.png";
import mongoose from "../../../../public/icons/icons8-mongoose-480.png";
import mongodb from "../../../../public/icons/mongodb.png";
import react from "../../../../public/icons/icons8-react-480.png";
import nextjs from "../../../../public/icons/nextjs-icon.png";
import framer from "../../../../public/icons/framer-motion-seeklogo.png";
import redux from "../../../../public/icons/icons8-redux-480.png";
import AnimatedCharacters from "../share/AnimatedCharacters";

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
      image: framer,
    },
    {
      id: 8,
      image: mongoose,
    },
    {
      id: 9,
      image: node,
    },
    {
      id: 10,
      image: npm,
    },
    {
      id: 11,
      image: mongodb,
    },
    {
      id: 12,
      image: react,
    },
    {
      id: 13,
      image: nextjs,
    },
    {
      id: 14,
      image: redux,
    },
    {
      id: 15,
      image: figma,
    },
    {
      id: 16,
      image: photoshop,
    },
    {
      id: 17,
      image: illustrator,
    },
  ];

  return (
    <div className="w-full  flex flex-col lg:gap-16 gap-5 ">
      <div className="xl:px-10 md:px-5 px-3  gap-5 flex lg:flex-row flex-col justify-between items-center ">
        <div className="lg:order-1 order-2 ">
          <div>
            <TypeWriting />
            <Name />
            <h2 className="dark:text-lg-text text-dr-text font-bold text-[12px] sm:text-base  md:text-xl leading-none ">
              <AnimatedCharacters text="Front-end Developer | MERN stack | Programming Enthusiast" />
            </h2>
            <p className="dark:text-lg-text text-dr-text font-bold text-[12px] sm:text-base md:text-xl">
              <AnimatedCharacters text={text} />
            </p>
          </div>
          <div className="md:py-5 py-2">
            <SocialLinks />
          </div>

          <div className="flex md:gap-5 gap-3 py-2">
            <AnimatedBtn
              title="resume"
              width="md:w-2/3 w-1/2"
              icon={<CloudDownloadIcon />}
              show={true}
              href="/cv_of_abedin_wahid.pdf"
              target="_blank"
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
        <Marquee baseVelocity={-0.8}>
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
