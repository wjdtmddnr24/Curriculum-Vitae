import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GallaryItemProps {
  title: string;
  description: string;
  year: number;
  techs: string[];
  imageURL: StaticImageData | string | undefined;
  sourceURL: string;
}

const GallaryItem = ({ title, year, description, imageURL, techs }: GallaryItemProps) => {
  return (
    <Link href="#" className="" draggable={false}>
      <div className="flex mb-2 gap-2">
        <div className="grid">
          <div className="text-xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold truncate">
            {title}
          </div>
          <div className="text-xs truncate">{description}</div>
        </div>
        <div className="ml-auto text-sm self-center shrink-0 mx-2 flex gap-1 items-center">
          <span>더보기</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <ImageHolder imageURL={imageURL} />
    </Link>
  );
};

export default GallaryItem;

const ImageHolder = ({ imageURL }: { imageURL: StaticImageData | string | undefined }) => {
  return imageURL ? (
    <Image
      className="w-full aspect-[304/193] bg-slate-300 object-cover rounded-3xl"
      src={imageURL}
      alt=""
      priority
      draggable={false}
    />
  ) : (
    <div className="w-full aspect-[304/193] bg-slate-300 object-cover rounded-3xl" />
  );
};
