import classNames from "classnames";

interface TitleProps {
  className?: string;
  children?: React.ReactNode;
}

const Title = ({ className, children }: TitleProps) => {
  return (
    <div className={classNames("text-3xl font-bold text-slate-800 dark:text-slate-200 break-keep", className)}>
      {children}
    </div>
  );
};

export default Title;
