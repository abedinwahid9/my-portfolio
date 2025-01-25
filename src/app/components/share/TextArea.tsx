import React from "react";

interface TextAreaProps {
  text: string; // The text is expected to be a valid HTML string
}

const TextArea: React.FC<TextAreaProps> = ({ text }) => {
  return (
    <div
      className="dark:text-lg-text text-area  text-dr-text md:text-lg text-sm md:py-5 py-2"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TextArea;
