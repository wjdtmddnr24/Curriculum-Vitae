import classNames from "classnames";

interface SubTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const SubTitle = ({ className, children }: SubTitleProps) => {
  return <div className={classNames("text-lg", className)}>{children}</div>;
};

export default SubTitle;
