import Image from "next/image";
import profile from "../../../assets/my.png";
import SocialLinks from "../share/SocialLinks";

const Main: React.FC = () => {
  const text = "<> Coding with Creativity, Passion, and Style </>";

  return (
    <div className="max-w-[1440px] mx-auto md:px-10 px-3 w-full h-full gap-5 flex lg:flex-row flex-col justify-between items-center">
      <div className="lg:order-1 order-2 ">
        <div>
          <h1 className="capitalize dark:text-lg-button text-dr-button md:text-3xl sm:text-xl text-md font-bold">
            Hi, I'm Abedin Wahid
          </h1>
          <h2 className="dark:text-lg-text text-dr-text font-bold text-[10px] sm:text-base md:text-xl">
            Front-end Developer | MERN stack | Programming Enthusiast
          </h2>
          <p className="dark:text-lg-text text-dr-text font-bold text-[10px] sm:text-base md:text-xl">
            {text}
          </p>
        </div>
        <SocialLinks />
      </div>
      <div className="lg:w-[420px] lg:order-2 order-1  lg:h-[420px] sm:w-72 w-44 sm:h-72 h-44 relative">
        <Image
          src={profile}
          alt="profile"
          className="rounded-2xl object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Main;
