import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1440px]  mx-auto ">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;