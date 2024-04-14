import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";

export type ImageSize = "small" | "medium" | "large" | "full";

interface ImageProps {
  className?: string;
  size?: ImageSize;
  src: string | StaticImport;
  alt: string;
  caption?: React.ReactNode;
}

const sizeClassNames = {
  small: "w-[24rem]",
  medium: "w-[32rem]",
  large: "w-[40rem]",
  full: "w-full",
};

const Image = ({ alt, caption, className, size = "medium", src }: ImageProps) => {
  return (
    <div className={classNames("mb-8 align-middle text-center", className)}>
      <NextImage
        className={classNames("mx-auto border border-1 border-slate-500 mb-2", sizeClassNames[size])}
        src={src}
        alt={alt}
        draggable={false}
      />
      {caption && <span>{caption}</span>}
    </div>
  );
};

export default Image;
