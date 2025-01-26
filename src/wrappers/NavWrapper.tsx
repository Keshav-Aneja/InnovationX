import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const NavWrapper = ({ children }: Props) => {
  return <div className="w-full h-[15vh]">{children}</div>;
};

export default NavWrapper;
