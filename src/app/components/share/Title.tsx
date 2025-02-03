import React from "react";

interface TITLE {
  title: string | undefined;
}

const Title: React.FC<TITLE> = ({ title }) => {
  return (
    <h3 className="dark:text-lg-text lg:text-3xl md:text-xl text-lg font-extrabold text-dr-text font-playfairDisplay capitalize">
      {title}
    </h3>
  );
};

export default Title;
