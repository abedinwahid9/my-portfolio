import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="max-w-[1440px]  mx-auto max-h-screen ">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;
