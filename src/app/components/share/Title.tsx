import React from "react";
import AnimatedCharacters from "./AnimatedCharacters";

interface TITLE {
  title: string | undefined;
}

const Title: React.FC<TITLE> = ({ title }) => {
  return (
    <h3 className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold text-dr-text font-playfairDisplay first-letter:uppercase">
      {title && <AnimatedCharacters text={title} />}
    </h3>
  );
};

export default Title;
