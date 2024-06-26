import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GallaryItemProps {
  title: string;
  description: string;
  thumbnailURL: StaticImageData | string | undefined;
  href: string;
}

const GallaryItem = ({ title, href, description, thumbnailURL }: GallaryItemProps) => {
  return (
    <Link
      href={href}
      draggable={false}
      className="hover:bg-gray-100 dark:hover:bg-gray-700 -m-2 p-2 rounded-xl transition-colors duration-200 group"
      target="_blank"
    >
      <div className="flex mb-2 gap-2">
        <div className="grid overflow-hidden">
          <span className="w-max text-xl font-bold text-slate-800 dark:text-slate-200 truncate">{title}</span>
          <div className="text-xs truncate">{description}</div>
        </div>
        <div className="lg:hidden ml-auto text-sm self-center shrink-0 mx-2 flex gap-1 items-center">
          <span>더보기</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <ThumbnailHolder title={title} thumbnailURL={thumbnailURL} />
    </Link>
  );
};

export default GallaryItem;

const ThumbnailHolder = ({
  title,
  thumbnailURL,
}: {
  title: string;
  thumbnailURL: StaticImageData | string | undefined;
}) => {
  if (thumbnailURL) {
    return (
      <Image
        className="w-full aspect-[304/193] bg-slate-300 dark:bg-slate-500 object-cover transition-all duration-500 outline outline-1 outline-slate-200 dark:outline-slate-700 rounded-3xl"
        src={thumbnailURL}
        alt="thmbnail"
        priority
        draggable={false}
      />
    );
  }

  return (
    <div className="w-full aspect-[304/193] rounded-3xl relative outline outline-1 outline-slate-200 dark:outline-slate-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 dark:opacity-0 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-800 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex justify-center items-center ">
        <span className="text-4xl font-bold text-center text-white dark:text-slate-200 transition-colors duration-500">
          {title}
        </span>
      </div>
    </div>
  );
};
