import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Loading>
      <section className="max-w-[1440px]  mx-auto   ">
        <Navbar />
        {children}
      </section>
    </Loading>
  );
};

export default Layout;
