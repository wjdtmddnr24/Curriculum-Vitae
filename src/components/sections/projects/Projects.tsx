import Gallary from "@components/gallary/Gallary";
import GradientTypography from "@components/gradient-typography/GradientTypography";
import SectionCard from "@components/section-card/SectionCard";
import camtactPic from "@public/camtact.png";
import captainHookPic from "@public/captain_hook.png";
import portfolioPic from "@public/portfolio_combined_compressed.png";
import swmBotPic from "@public/swm_bot.png";
import weboxLogoPic from "@public/webox_logo.png";

export function Projects() {
  return (
    <SectionCard className="px-6 py-8 lg:p-10">
      <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
        Projects
      </GradientTypography>
      <Gallary>
        <Gallary.Item
          title="Portfolio"
          description="포트폴리오 웹페이지"
          thumbnailURL={portfolioPic}
          href="/projects/portfolio"
        />
        <Gallary.Item
          title="Webox"
          description="퍼스널 모빌리티를 위한 클라우드 기반 블랙박스 애플리케이션"
          thumbnailURL={weboxLogoPic}
          href="/projects/webox"
        />
        <Gallary.Item
          title="SWM Bot"
          description="소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇"
          thumbnailURL={swmBotPic}
          href="/projects/swm-bot"
        />
        <Gallary.Item
          title="Captain Hook"
          description="Webhook 기반 알림 서비스"
          thumbnailURL={captainHookPic}
          href="/projects/captain-hook"
        />
        <Gallary.Item
          title="Camtact"
          description="원격 회전캠을 이용한 비대면 시험 감독 플랫폼"
          thumbnailURL={camtactPic}
          href="/projects/camtact"
        />
        <Gallary.Item
          title="TCQR"
          description="문자열 압축기반 QR코드 애플리케이션"
          thumbnailURL={undefined}
          href="/projects/tcqr"
        />
      </Gallary>
    </SectionCard>
  );
}
