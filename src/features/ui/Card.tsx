import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  width?: string;
  height?: string;
}

const Card = ({ className, children, width, height }: CardProps) => {
  return (
    <div
      className={classNames([
        "mx-auto bg-white dark:bg-slate-800 dark:text-slate-200 rounded-3xl shadow-2xl",
        width || "min-w-[88rem]",
        height || "min-h-[40rem]",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
