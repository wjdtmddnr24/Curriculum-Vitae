import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={classNames([
        "min-w-[88rem] min-h-[40rem] mx-auto bg-white dark:bg-slate-800 dark:text-slate-200 rounded-3xl shadow-2xl",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
