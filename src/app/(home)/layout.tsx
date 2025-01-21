// layouts/Layout.tsx
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Loading>
      <Navbar />
      <main className="max-w-[1440px] mx-auto">{children}</main>
    </Loading>
  );
};

export default Layout;
