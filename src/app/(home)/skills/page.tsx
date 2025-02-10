"use client";
import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import AnimeDivider from "@/app/components/share/AnimeDivider";
import SkillCard from "@/app/components/share/SkillCard";
import { GrCertificate } from "react-icons/gr";
import Title from "@/app/components/share/Title";
import ArrowSvgAni from "@/app/components/svg/ArrowSvgAni";
import React from "react";
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
import CertificationCard from "@/app/components/share/CertificationCard";
import AnimatedCharacters from "@/app/components/share/AnimatedCharacters";

const page = () => {
  const skills = [
    {
      category: "Front End Technology",
      skills: [
        { title: "next js", icon: nextjs },
        { title: "react", icon: react },
        { title: "motion", icon: framer },
        { title: "bootstrap", icon: bootstrap },
        { title: "tailwind", icon: tailwind },
        { title: "html", icon: html },
        { title: "css", icon: css },
      ],
    },
    {
      category: "Programming Language",
      skills: [{ title: "javascript", icon: js }],
    },
    {
      category: "back end technology",
      skills: [
        { title: "express js", icon: express },
        { title: "node js", icon: node },
      ],
    },
    {
      category: "database",
      skills: [
        { title: "mongodb", icon: mongodb },
        { title: "mongoose", icon: mongoose },
      ],
    },
    {
      category: "ui ux",
      skills: [
        { title: "figma", icon: figma },
        { title: "photo shop", icon: photoshop },
        { title: "illustrator", icon: illustrator },
      ],
    },
    {
      category: "others",
      skills: [
        { title: "redux", icon: redux },
        { title: "npm", icon: npm },
      ],
    },
  ];

  return (
    <div className=" py-10 md:px-5 px-3">
      {/* skills section */}
      <section className="flex md:flex-row flex-col gap-3">
        <div className="md:w-2/3 w-full">
          <Title title='"Skills That Power My Code"' />
        </div>
        <div className="md:w-1/3 w-full">
          <AnimatedBtn
            href="/contact-me"
            title="contact me"
            width="w-full"
            show={true}
            icon={<ArrowSvgAni />}
          />
        </div>
      </section>

      {/* divider */}
      <div className="flex py-2 items-center">
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
        <span className="h-0.5 shadow-md shadow-lg-primary dark:shadow-lg-link w-full"></span>
        <AnimeDivider />
      </div>

      {skills?.map((cate, i) => {
        return (
          <section key={i} className="py-3">
            <div className="md:w-2/3 w-full lg:ml-4 ml-3">
              <h3 className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold text-dr-text font-playfairDisplay ">
                <AnimatedCharacters text={`${cate.category}:`} />
              </h3>
            </div>
            <div className="py-4 grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 justify-center place-items-center items-center gap-3">
              {cate.skills?.map((skill, i) => {
                return (
                  <SkillCard key={i} title={skill.title} img={skill.icon} />
                );
              })}
            </div>
          </section>
        );
      })}
      <AnimeDivider />
      {/* certificatioN */}
      <section className="py-5">
        <div className="flex justify-center items-center gap-3">
          <GrCertificate className="w-8 h-8 dark:text-lg-text text-dr-text" />
          <Title title={`certificatioN `} />
          <GrCertificate className="w-8 h-8 dark:text-lg-text text-dr-text" />
        </div>
        <div className="md:py-8 py-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <CertificationCard />
        </div>
      </section>
    </div>
  );
};

export default page;
