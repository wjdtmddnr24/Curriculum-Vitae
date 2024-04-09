import Card from "../../components/card/Card";
import ProjectGallary from "../project-gallary/ProjectGallary";
import captainHookPic from "../../../public/captain_hook.png";
import portfolioPic from "../../../public/portfolio_combined_compressed.png";

export function Projects() {
  return (
    <Card className="p-6 lg:p-10">
      <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-8">
        Projects
      </div>
      <ProjectGallary>
        <ProjectGallary.Item
          title="Portfolio"
          description="포트폴리오 웹페이지"
          year={2023}
          techs={["React", "Nextjs", "TypeScript", "Tailwind CSS"]}
          imageURL={portfolioPic}
          sourceURL="#"
        />

        <ProjectGallary.Item
          title="Webox"
          description="퍼스널 모빌리티를 위한 클라우드 기반 블랙박스 애플리케이션"
          year={2021}
          techs={["Nestjs", "Kubernetes", "Flutter"]}
          imageURL={undefined}
          sourceURL="#"
        />

        <ProjectGallary.Item
          title="Captain Hook"
          description="Webhook 기반 알림 서비스"
          year={2021}
          techs={["TypeScript", "React", "Nextjs", "Nestjs"]}
          imageURL={captainHookPic}
          sourceURL="#"
        />

        <ProjectGallary.Item
          title="SWM Chatbot"
          description="소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇"
          year={2021}
          techs={["Express", "Mongodb", "Puppeteer"]}
          imageURL={undefined}
          sourceURL="#"
        />

        <ProjectGallary.Item
          title="Camtact"
          description="원격 회전캠을 이용한 비대면 감독 플랫폼"
          year={2020}
          techs={["React", "Electron", "Nestjs", "Raspberrypi"]}
          imageURL={undefined}
          sourceURL="#"
        />

        <ProjectGallary.Item
          title="TCQR (Text Compressed QRCode)"
          description="문자열 압축기반 QR코드 애플리케이션"
          year={2016}
          techs={["Android", "Java"]}
          imageURL={undefined}
          sourceURL="#"
        />
      </ProjectGallary>
    </Card>
  );
}
