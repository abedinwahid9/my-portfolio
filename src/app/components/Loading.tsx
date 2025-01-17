"use client";

import { useEffect, useState, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Loading = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>{isLoading ? <p className="white">Loading......</p> : <>{children}</>}</>
  );
};

export default Loading;
