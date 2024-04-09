import classNames from "classnames";
import { ElementType, ReactNode } from "react";

interface GradientTypographyProps<T extends ElementType> {
  as?: T;
  children: ReactNode;
  className?: string;
}

const GradientTypography = <T extends ElementType = "span">({
  as,
  className,
  children,
}: GradientTypographyProps<T>) => {
  const Component = as || "span";
  return (
    <Component
      className={classNames(
        className,
        "text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500"
      )}
    >
      {children}
    </Component>
  );
};

export default GradientTypography;
