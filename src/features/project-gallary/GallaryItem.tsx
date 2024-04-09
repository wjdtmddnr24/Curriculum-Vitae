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
    <Link href="#" className="" draggable={false}>
      <div className="flex mb-2 gap-2">
        <div className="grid">
          <GradientTypography className="text-xl font-bold truncate">{title}</GradientTypography>
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
