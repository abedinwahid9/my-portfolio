import Image from "next/image";
import profile from "../../../assets/my.png";
import SocialLinks from "../share/SocialLinks";
import AnimatedBtn from "../share/AnimatedBtn";
import { FiAlignCenter } from "react-icons/fi";
import Name from "./Name";

const Main: React.FC = () => {
  const text = "<> Coding with Creativity, Passion, and Style </>";

  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="xl:px-10 md:px-5 px-3 w-full h-full gap-5 flex lg:flex-row flex-col justify-between items-center ">
        <div className="lg:order-1 order-2 ">
          <div>
            <Name />
            <h2 className="dark:text-lg-text text-dr-text font-bold text-[10px] sm:text-base md:text-xl">
              Front-end Developer | MERN stack | Programming Enthusiast
            </h2>
            <p className="dark:text-lg-text text-dr-text font-bold text-[10px] sm:text-base md:text-xl">
              {text}
            </p>
          </div>
          <SocialLinks />
          <div className="flex md:gap-5 gap-3 py-2">
            <AnimatedBtn
              title="resume"
              width="md:w-2/3 w-1/2"
              icon={<FiAlignCenter />}
              show={true}
            />
            <AnimatedBtn
              title="about me"
              width="md:w-1/3 w-1/2"
              icon={<FiAlignCenter />}
              show={true}
            />
          </div>
        </div>
        <div className="lg:w-[380px] rounded-2xl overflow-hidden lg:order-2 order-1  lg:h-[380px] sm:w-72 w-44 sm:h-72 h-44 relative  shadow-[0px_0px_60px_5px_#50AAB8]">
          <Image src={profile} alt="profile" className="object-cover" fill />
        </div>
      </div>
    </div>
  );
};

export default Main;
