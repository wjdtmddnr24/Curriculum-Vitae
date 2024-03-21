import classNames from "classnames";
import { ReactNode } from "react";

/* 
|| "min-w-[88rem]"
 || "min-h-[40rem]"
*/
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
