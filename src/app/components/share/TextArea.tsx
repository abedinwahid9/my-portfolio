import React from "react";

interface TextAreaProps {
  text: string; // The text is expected to be a valid HTML string
}

const TextArea: React.FC<TextAreaProps> = ({ text }) => {
  return (
    <div
      className="dark:text-lg-text text-dr-text text-lg py-5"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TextArea;
