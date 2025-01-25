import Image from "next/image";
import aboutme from "../../../assets/aboutme.png";
import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import ArrowSvgAni from "@/app/components/svg/ArrowSvgAni";
import { DynamicMetadata } from "@/app/components/share/DynamicMetaData";
import Title from "@/app/components/share/Title";
import Link from "next/link";
import TextArea from "@/app/components/share/TextArea";

export const metadata = DynamicMetadata({
  page: "About-me",
});

const page = () => {
  const headTitle = [
    "Nothing is Impossible",
    "Let Me Introduce Myself",
    "The Journey of a Self-Learner",
    "Who Is Abedin Wahid ?",
  ];

  return (
    <>
      <div className=" py-10 md:px-5 px-3">
        <section className="flex flex-col md:flex-row w-full h-full justify-between gap-10 items-center ">
          <div className="md:w-1/2 w-72 h-full">
            <Image
              className="w-full h-full"
              width={0}
              height={0}
              src={aboutme}
              alt="about-me"
            />
          </div>
          <div className="md:w-1/2 w-full h-full flex justify-start md:justify-center">
            <div className="  flex flex-col md:gap-5 gap-3">
              <p className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold font-playfairDisplay text-dr-text">
                {headTitle[0]}
              </p>
              <Link href="/projects">
                <AnimatedBtn
                  title="project"
                  width="md:w-3/4 w-full"
                  show={true}
                  icon={<ArrowSvgAni />}
                />
              </Link>

              {headTitle?.slice(1).map((str, i) => {
                return (
                  <p
                    key={i}
                    className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold text-dr-text"
                  >
                    &#34;{str}&#34;
                  </p>
                );
              })}
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
            <Title title="Personal Story" />
            <TextArea
              text="<ul>
<li>JavaScript (React, Node.js, Express.js)</li>
<li>MongoDB</li>
<li>API Development</li>
<li>Multi-Vendor Systems</li>
<li>International Payment Integration</li>
</ul>"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
