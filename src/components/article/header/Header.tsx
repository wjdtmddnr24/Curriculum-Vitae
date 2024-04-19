import classNames from "classnames";

import SubTitle from "./SubTitle";
import Title from "./Title";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return <header className={classNames("grid gap-2 mb-8", className)}>{children}</header>;
};

Header.Title = Title;
Header.SubTitle = SubTitle;

export default Header;
