import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const SectionCard = ({ className, children }: CardProps) => {
  return (
    <section
      className={classNames([
        "lg:w-[64rem] lg:aspect-[2/1] bg-white dark:bg-slate-800 lg:rounded-3xl lg:shadow-2xl transition-colors duration-500",
        className,
      ])}
    >
      {children}
    </section>
  );
};

export default SectionCard;
