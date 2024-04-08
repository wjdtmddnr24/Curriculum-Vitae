import Image, { StaticImageData } from "next/image";

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
    <div className="group relative overflow-hidden rounded-xl">
      {imageURL ? (
        <Image
          className="w-full aspect-[5/4] bg-slate-300 group-hover:scale-105 object-cover brightness-75 transition-all duration-500"
          src={imageURL}
          alt=""
          priority
        />
      ) : (
        <div className="w-full aspect-[5/4] bg-slate-300 group-hover:scale-105 object-cover brightness-75 transition-all duration-500" />
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center group-hover:bg-gray-800/50">
        <span className="text-white py-2 px-4 border border-white rounded-md cursor-pointer hover:bg-gray-100/30 transition-colors">
          자세히 보기
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-slate-50 p-4">
        {/* <span className="ml-auto text-base">{year}</span> */}

        <span className="text-lg font-bold">{title}</span>
        <div className="text-sm">{description}</div>
        <div className="flex items-center gap-2 overflow-ellipsis">
          {techs.map((t) => (
            <div className="text-sm rounded-full" key={t}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallaryItem;
