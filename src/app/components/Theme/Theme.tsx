import { useTheme } from "next-themes";
import Image from "next/image";
import sun from "../../../../public/assets/sun.png";
import moon from "../../../../public/assets/moon.png";

const Theme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  console.log(theme, resolvedTheme);

  const handleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button onClick={handleTheme} className="w-10 h-10 ">
        {resolvedTheme === "dark" ? (
          <Image className="w-full h-full" src={sun} alt="sun" />
        ) : (
          <Image className="w-full h-full" src={moon} alt="moon" />
        )}
      </button>
    </div>
  );
};

export default Theme;
