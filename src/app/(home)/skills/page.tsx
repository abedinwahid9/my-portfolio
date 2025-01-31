import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import AnimeDivider from "@/app/components/share/AnimeDivider";
import SkillCard from "@/app/components/share/SkillCard";
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
import npm from "../../../../public/icons/icons8-npm-480.png";

const page = () => {
  const skills = [
    {
      category: "front end technology",
      skills: [
        { title: "html", icon: html },
        { title: "css", icon: css },
        { title: "bootstrap", icon: bootstrap },
        { title: "tailwind", icon: tailwind },
      ],
    },
    {
      category: "programming language",
      skills: [{ title: "javascript", icon: js }],
    },
    {
      category: "back end technology",
      skills: [{ title: "express js", icon: express }],
    },
    {
      category: "ui ux",
      skills: [
        { title: "figma", icon: figma },
        { title: "photo shop", icon: photoshop },
      ],
    },
    {
      category: "others",
      skills: [{ title: "npm", icon: npm }],
    },
  ];

  return (
    <div className=" py-10 md:px-5 px-3">
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
              <Title title={`${cate.category} :`} />
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
    </div>
  );
};

export default page;
