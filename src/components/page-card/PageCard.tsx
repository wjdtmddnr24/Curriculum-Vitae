import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const PageCard = ({ className, children }: CardProps) => {
  return (
    <div
      className={classNames(
        "lg:w-[64rem] bg-white dark:bg-slate-800 lg:rounded-3xl lg:shadow-2xl px-6 py-8 lg:p-10 transition-colors duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageCard;
