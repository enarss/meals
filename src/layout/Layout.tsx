import NavBar from "./NavBar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
