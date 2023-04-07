import Image, { StaticImageData } from "next/image";
import portfolioPic from "../../../public/portfolio_combined_compressed.png";

export const ProjectGallary = () => {
  return (
    <div className="grid grid-cols-3 gap-8 text-lg">
      <GallaryItem
        title="Portfolio Website"
        description="포트폴리오 웹사이트"
        year={2023}
        techs={[]}
        link="#"
        imageURL={portfolioPic}
        sourceURL="#"
      />

      <GallaryItem
        title="Webox"
        description="퍼스널 모빌리티를 위한 클라우드 기반 블랙박스 애플리케이션"
        year={2021}
        techs={[]}
        link="#"
        imageURL=""
        sourceURL="#"
      />

      <GallaryItem
        title="Captain Hook"
        description="Webhook 기반 알림 서비스"
        year={2021}
        techs={[]}
        link="#"
        imageURL=""
        sourceURL="#"
      />

      <GallaryItem
        title="SWM Chatbot"
        description="소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇"
        year={2021}
        techs={[]}
        link="#"
        imageURL=""
        sourceURL="#"
      />

      <GallaryItem
        title="Camtact"
        description="원격 회전캠을 이용한 비대면 감독 플랫폼"
        year={2020}
        techs={[]}
        link="#"
        imageURL=""
        sourceURL="#"
      />

      <GallaryItem
        title="TCQR (Text Compressed QRCode)"
        description="문자열 압축기반 QR코드 애플리케이션"
        year={2016}
        techs={[]}
        link="#"
        imageURL=""
        sourceURL="#"
      />
    </div>
  );
};

interface GallaryItemProps {
  title: string;
  description: string;
  year: number;
  techs: string[];
  imageURL: StaticImageData | string;
  link: string;
  sourceURL: string;
}
const GallaryItem = ({ title, year, description, imageURL }: GallaryItemProps) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-700 rounded shadow hover:shadow-md group">
      <Image
        className="w-full aspect-[6/3.5] bg-slate-300 rounded-t object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
        src={imageURL}
        alt=""
      />
      <div className=""></div>
      <div className="p-4">
        <div className="flex">
          <span className="text-xl font-bold">{title}</span>
          <span className="ml-auto">{year}</span>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};
