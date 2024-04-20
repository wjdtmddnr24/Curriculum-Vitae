import classNames from "classnames";
import NextImage from "next/image";
import { ComponentProps } from "react";

export type ImageSize = "small" | "medium" | "large" | "full";

interface ImageProps extends ComponentProps<typeof NextImage> {
  className?: string;
  size?: ImageSize;
  caption?: React.ReactNode;
}

const sizeClassNames = {
  small: "w-[24rem]",
  medium: "w-[32rem]",
  large: "w-[40rem]",
  full: "w-full",
};

const Image = ({ caption, className, size = "medium", ...props }: ImageProps) => {
  return (
    <div className={classNames("mb-8 align-middle text-center", className)}>
      <NextImage className={classNames("mx-auto mb-2", sizeClassNames[size])} draggable={false} {...props} />
      {caption && <span>{caption}</span>}
    </div>
  );
};

export default Image;
