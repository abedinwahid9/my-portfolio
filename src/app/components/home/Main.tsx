import { useTheme } from "next-themes";
import React from "react";

const Main = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <h2 className="text-lg-text dark:text-dr-text">hi, i'm abedin wahid</h2>
    </div>
  );
};

export default Main;
