import Image, { StaticImageData } from "next/image";
import portfolioPic from "../../../public/portfolio_combined_compressed.png";
import captainHookPic from "../../../public/captain_hook.png";

export const ProjectGallary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">
      <GallaryItem
        title="Portfolio"
        description="포트폴리오 웹페이지"
        year={2023}
        techs={["React", "Nextjs", "TypeScript", "Tailwind CSS"]}
        imageURL={portfolioPic}
        sourceURL="#"
      />

      <GallaryItem
        title="Webox"
        description="퍼스널 모빌리티를 위한 클라우드 기반 블랙박스 애플리케이션"
        year={2021}
        techs={["Nestjs", "Kubernetes", "Flutter"]}
        imageURL={undefined}
        sourceURL="#"
      />

      <GallaryItem
        title="Captain Hook"
        description="Webhook 기반 알림 서비스"
        year={2021}
        techs={["TypeScript", "React", "Nextjs", "Nestjs"]}
        imageURL={captainHookPic}
        sourceURL="#"
      />

      <GallaryItem
        title="SWM Chatbot"
        description="소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇"
        year={2021}
        techs={["Express", "Mongodb", "Puppeteer"]}
        imageURL={undefined}
        sourceURL="#"
      />

      <GallaryItem
        title="Camtact"
        description="원격 회전캠을 이용한 비대면 감독 플랫폼"
        year={2020}
        techs={["React", "Electron", "Nestjs", "Raspberrypi"]}
        imageURL={undefined}
        sourceURL="#"
      />

      <GallaryItem
        title="TCQR (Text Compressed QRCode)"
        description="문자열 압축기반 QR코드 애플리케이션"
        year={2016}
        techs={["Android", "Java"]}
        imageURL={undefined}
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
