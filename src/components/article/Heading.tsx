import classNames from "classnames";

interface HeadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <div className={classNames("mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200", className)}>
      {children}
    </div>
  );
};

export default Heading;
