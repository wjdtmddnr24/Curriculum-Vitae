import classNames from "classnames";

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer = ({ className, children }: FooterProps) => {
  return <footer className={classNames("text-end text-slate-500 dark:text-slate-500", className)}>{children}</footer>;
};

export default Footer;
