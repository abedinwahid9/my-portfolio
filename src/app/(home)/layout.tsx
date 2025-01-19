import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: "Home | Abedin Wahid",
  description:
    "this is abedin wahid portfolio.Front-end Developer | MERN stack | Programming Enthusiast",
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Loading>
      <Navbar />
      <main className="max-w-[1440px]  mx-auto  lg:py-0 md:py-10 py-8">
        {children}
      </main>
    </Loading>
  );
};

export default Layout;
