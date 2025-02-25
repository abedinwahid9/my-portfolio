import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import CustomCursor from "../components/share/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Loading>
        <Navbar />
        <main className="max-w-[1440px] mx-auto">{children}</main>
        <CustomCursor />
      </Loading>
    </>
  );
};

export default Layout;
