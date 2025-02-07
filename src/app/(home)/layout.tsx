import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Template from "../components/share/TempleteAnim";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Loading>
      <Navbar />
      <Template>{children}</Template>
    </Loading>
  );
};

export default Layout;
