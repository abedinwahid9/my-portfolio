import Image from "next/image";
import aboutme from "../../../assets/aboutme.png";
import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import ArrowSvgAni from "@/app/components/svg/ArrowSvgAni";
import { DynamicMetadata } from "@/app/components/share/DynamicMetaData";
import Title from "@/app/components/share/Title";
import TextArea from "@/app/components/share/TextArea";
import HightLightText from "@/app/components/share/HightLightText";
import { CiCoffeeCup } from "react-icons/ci";
import { FaHandshake, FaMailBulk } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { LuBookOpenText } from "react-icons/lu";
import html from "../../../../public/icons/icons8-html-480.png";
import CircleAnim from "@/app/components/share/CircleAnim";

export const metadata = DynamicMetadata({
  page: "About-me",
});

type PersonalText = {
  icon: React.ReactNode;
  text: string;
};

const page = () => {
  const headTitle = [
    "Nothing is Impossible",
    "Let Me Introduce Myself",
    "The Journey of a Self-Learner",
    "Who Is Abedin Wahid ?",
  ];

  const personalText: PersonalText[] = [
    {
      icon: <CiCoffeeCup />,
      text: "I’m a coffee enthusiast and love coding late at night.",
    },
    {
      icon: <FiTrendingUp />,
      text: "I’ve built my first portfolio project with zero budget — just passion and perseverance.",
    },
    {
      icon: <LuBookOpenText />,
      text: "When I’m not coding, I enjoy reading to book and exploring new places.",
    },
  ];
  const contactText: PersonalText[] = [
    {
      icon: <FaMailBulk />,
      text: "Want to work together or discuss a project? Let’s connect!",
    },
    {
      icon: <FaHandshake />,
      text: "I'm always open to learning opportunities and collaborations. Feel free to reach out!",
    },
  ];

  return (
    <>
      <div className=" py-10 md:px-5 px-3">
        <section className="flex flex-col md:flex-row w-full h-full justify-between gap-10 items-center">
          {/* Left Section: Image with Rotating Icons */}
          <div className="md:w-1/2 w-72 md:h-[589px] h-[288px] flex justify-center items-center relative">
            {/* Main Image */}
            <div className="relative z-40 ">
              <Image
                className="w-full h-full"
                width={0}
                height={0}
                src={aboutme}
                alt="about-me"
              />
            </div>

            {/* Rotating Icons */}
            <div className="w-full  h-full absolute -top-10 flex justify-center items-center z-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <CircleAnim img={html} key={index} index={index} />
              ))}
            </div>
          </div>

          {/* Right Section: Text and Button */}
          <div className="md:w-1/2 w-full h-full flex justify-start md:justify-center">
            <div className="w-full flex flex-col md:gap-5 gap-3">
              <p className="dark:text-lg-text md:text-start text-center lg:text-3xl md:text-xl text-lg font-extrabold font-playfairDisplay text-dr-text">
                {headTitle[0]}
              </p>

              <AnimatedBtn
                href="/projects"
                title="project"
                width="md:w-3/5 w-full"
                show={true}
                icon={<ArrowSvgAni />}
              />

              {headTitle?.slice(1).map((str, i) => (
                <p
                  key={i}
                  className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold text-dr-text"
                >
                  &#34;{str}&#34;
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="py-5 flex flex-col gap-5">
          <div>
            <Title title="Hey! I'm Abedin Wahid" />
            <TextArea text='"A self-learner and web developer on a mission to turn creative ideas into fully functional web solutions. I love solving real-world problems through code and continuously learning new technologies."' />
          </div>
          <div>
            <Title title="Personal Story" />
            <TextArea text='"Coming from a non-CSE background, my journey into web development started out of curiosity. I began learning the basics of HTML, CSS, and JavaScript, and soon discovered the power of the MERN stack. As a self-learner, I’ve built projects from scratch, explored multi-vendor functionalities, and gained hands-on experience in handling international payment gateways."' />
          </div>
          <div>
            <Title title="Skills & Strengths" />
            <TextArea
              text="<ol >
<li>JavaScript (React, Node.js, Express.js)</li>
<li>MongoDB</li>
<li>API Development</li>
<li>Multi-Vendor Systems</li>
<li>International Payment Integration</li>
</ol>"
            />
          </div>
          <div>
            <Title title="Soft Skills" />
            <TextArea text="<ul><li><strong>Problem-Solving</strong>- I enjoy breaking down complex challenges into simple solutions.</li><li><strong>Adaptability</strong>- I quickly learn new technologies and adapt to changing needs.</li><li><strong>Communication</strong>- I explain technical concepts clearly to both tech and non-tech people.</li><li><strong>Time Management</strong>- I meet deadlines without compromising the quality of my work.</li><li><strong>Attention to DetailI</strong>- ensure every line of code is clean, readable, and efficient.</li><li><strong>Collaboration</strong>- I love working with teams and believe in the power of sharing ideas.</li><li><strong>Continuous Learning</strong>- I’m always curious to learn new tools, frameworks, and approaches.</li><li><strong>Critical Thinking</strong>- I make thoughtful decisions to improve code and project quality.</li></ul>" />
          </div>
          <div>
            <Title title="Fun Facts / Personal Touch" />
            <div className=" md:py-5 py-2">
              {personalText?.map((p, i) => {
                return <HightLightText key={i} text={p.text} icon={p.icon} />;
              })}
            </div>
          </div>
          <div>
            <Title title="Call to Action" />
            <div className=" md:py-5 py-2">
              {contactText?.map((p, i) => {
                return <HightLightText key={i} text={p.text} icon={p.icon} />;
              })}
            </div>
          </div>
        </section>
        <div className="flex justify-center text-center">
          <h3 className="dark:text-lg-text lg:text-3xl md:text-xl text-base font-extrabold text-dr-text underline">
            &quot;I Build Digital Bridges — Let’s Connect!&quot;
          </h3>
        </div>
      </div>
    </>
  );
};

export default page;
