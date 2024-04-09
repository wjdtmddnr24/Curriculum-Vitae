import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GradientTypography from "../../components/gradient-typography/GradientTypography";

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
    <Link href="#" className="group" draggable={false}>
      <div className="flex mb-2 gap-2">
        <div className="grid overflow-hidden">
          <GradientTypography className="w-max text-xl font-bold truncate">{title}</GradientTypography>
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
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        className="w-full aspect-[304/193] bg-slate-300 object-cover group-hover:scale-105 transition-transform duration-500"
        src={imageURL}
        alt=""
        priority
        draggable={false}
      />
    </div>
  ) : (
    <div className="w-full aspect-[304/193] bg-slate-300 object-cover rounded-3xl" />
  );
};
