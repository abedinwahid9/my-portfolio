import Image from "next/image";
import profile from "../../../assets/my.png";

const Main: React.FC = () => {
  const text = "<> Coding with Creativity, Passion, and Style </>";

  return (
    <div className="max-w-[1440px] mx-auto md:px-10 px-3 w-full h-full flex lg:flex-row flex-col justify-between items-center">
      <div className="lg:order-1 order-2 ">
        <h1 className="capitalize dark:text-lg-button text-dr-button text-3xl font-bold">
          Hi, I'm Abedin Wahid
        </h1>
        <h2 className="dark:text-lg-text text-dr-text font-bold text-xl">
          Front-end Developer | MERN stack | Programming Enthusiast
        </h2>
        <p className="dark:text-lg-text text-dr-text font-bold text-xl">
          {text}
        </p>
      </div>
      <div className="sm:w-[420px] lg:order-2 order-1  sm:h-[420px] w-60 h-60 relative">
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
