import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  width?: string;
  height?: string;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={classNames(["bg-white dark:bg-slate-800 dark:text-slate-200 rounded-3xl shadow-2xl", className])}>
      {children}
    </div>
  );
};

export default Card;
