import Card from "../../components/card/Card";
import Gallary from "../../components/gallary/Gallary";
import captainHookPic from "../../../public/captain_hook.png";
import portfolioPic from "../../../public/portfolio_combined_compressed.png";
import camtactPic from "../../../public/camtact.png";
import GradientTypography from "../../components/gradient-typography/GradientTypography";
import weboxLogoPic from "../../../public/webox_logo.png";
import { Section } from "../../components/section-container/Section";

export function Projects() {
  return (
    <Section>
      <Card className="px-6 py-8 lg:p-10">
        <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
          Projects
        </GradientTypography>
        <Gallary>
          <Gallary.Item
            title="Portfolio"
            description="포트폴리오 웹페이지"
            year={2023}
            techs={["React", "Nextjs", "TypeScript", "Tailwind CSS"]}
            imageURL={portfolioPic}
            sourceURL="#"
          />

          <Gallary.Item
            title="Webox"
            description="클라우드 기반 블랙박스 애플리케이션"
            year={2021}
            techs={["Nestjs", "Kubernetes", "Flutter"]}
            imageURL={weboxLogoPic}
            sourceURL="#"
          />

          <Gallary.Item
            title="Captain Hook"
            description="Webhook 기반 알림 서비스"
            year={2021}
            techs={["TypeScript", "React", "Nextjs", "Nestjs"]}
            imageURL={captainHookPic}
            sourceURL="#"
          />

          <Gallary.Item
            title="SWM Chatbot"
            description="소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇"
            year={2021}
            techs={["Express", "Mongodb", "Puppeteer"]}
            imageURL={undefined}
            sourceURL="#"
          />

          <Gallary.Item
            title="Camtact"
            description="원격 회전캠을 이용한 비대면 시험 감독 플랫폼"
            year={2020}
            techs={["React", "Electron", "Nestjs", "Raspberrypi"]}
            imageURL={camtactPic}
            sourceURL="#"
          />

          <Gallary.Item
            title="TCQR"
            description="문자열 압축기반 QR코드 애플리케이션"
            year={2016}
            techs={["Android", "Java"]}
            imageURL={undefined}
            sourceURL="#"
          />
        </Gallary>
      </Card>
    </Section>
  );
}
