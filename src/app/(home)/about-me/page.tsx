import Image from "next/image";
import aboutme from "../../../assets/aboutme.png";
import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import ArrowSvgAni from "@/app/components/svg/ArrowSvgAni";

const page = () => {
  const headTitle = [
    "Nothing is Impossible",
    "Let Me Introduce Myself",
    "The Journey of a Self-Learner",
    "Who Is Abedin Wahid ?",
  ];

  return (
    <div className=" py-10 md:px-5 px-3">
      <div className="flex flex-col md:flex-row w-full h-full justify-between gap-10 items-center ">
        <div className="md:w-1/2 w-72 h-full">
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={aboutme}
            alt="about-me"
          />
        </div>
        <div className="md:w-1/2 w-full h-full  flex flex-col md:gap-5 gap-3">
          <p className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold font-playfairDisplay text-dr-text">
            {headTitle[0]}
          </p>
          <AnimatedBtn
            title="project"
            width="md:w-1/2 w-full"
            show={true}
            icon={<ArrowSvgAni />}
          />
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
    </div>
  );
};

export default page;
