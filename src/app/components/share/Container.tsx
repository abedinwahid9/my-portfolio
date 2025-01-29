import { ReactNode, FC } from "react";

type Props = { children: ReactNode };

const Container: FC<Props> = ({ children }) => {
  return <div className=" md:px-5 px-3">{children}</div>;
};

export default Container;
