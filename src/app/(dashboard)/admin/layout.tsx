import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-[300%]">
      <h2>dashboard</h2>

      {children}
    </div>
  );
};

export default layout;
