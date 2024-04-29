"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import NextImage from "next/image";
import { ComponentProps, MouseEvent } from "react";

export type ImageSize = "small" | "medium" | "large" | "full";

interface ImageProps extends ComponentProps<typeof NextImage> {
  className?: string;
  size?: ImageSize;
  caption?: React.ReactNode;
}

const sizeClassNames = {
  small: "max-w-[24rem]",
  medium: "max-w-[32rem]",
  large: "max-w-[40rem]",
  full: "max-w-full",
};

const Image = ({ caption, className, size = "medium", ...props }: ImageProps) => {
  const onClick = (e: MouseEvent<HTMLImageElement>) => {
    window.open(e.currentTarget.src, "_blank");
  };
  return (
    <div className={classNames("align-middle text-center", className)}>
      <div className={classNames("relative mx-auto mb-2 cursor-pointer group", sizeClassNames[size])}>
        <NextImage draggable={false} {...props} onClick={onClick} />
        <div className="absolute opacity-0 group-hover:opacity-100 p-3 bg-slate-800/70 bottom-4 right-4 flex justify-center items-center rounded-lg text-slate-100 text-lg transition-opacity duration-200 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      {caption && <span>{caption}</span>}
    </div>
  );
};

export default Image;
