const HightLightText = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="text-3xl dark:text-lg-text text-dr-text">{icon}</div>
      <p className="dark:text-lg-text font-semibold text-dr-text md:text-lg text-sm ">
        {text}
      </p>
    </div>
  );
};

export default HightLightText;
