import GradientTypography from "@components/gradient-typography/GradientTypography";
import SectionCard from "@components/section-card/SectionCard";

import CareerCard from "../../career-card/CareerCard";

export function Careers() {
  return (
    <SectionCard className="px-6 py-8 lg:p-10">
      <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
        Careers
      </GradientTypography>
      <div className="grid md:grid-cols-2 gap-4">
        <CareerCard
          time="2024.07 ~ "
          title="크래프톤 펍지 스튜디오 백엔드 개발자"
          techs={["Backend"]}
          tags={["정규직"]}
        />
        <CareerCard
          time="2023.11 ~ 2023.01 (3개월)"
          title="로봇 관제 플랫폼 설계 및 개발"
          techs={["Kubernetes", "Istio", "Nest.js", "AWS Lambda", "WebSocket", "Redis", "Next.js"]}
          tags={["프리랜서", "개인"]}
        />
        <CareerCard
          time="2022.01 ~ 2023.10 (1년 9개월)"
          title="공군 교육훈련매체개발병"
          techs={["React.js", "Three.js", "Electron.js", "SCSS", "Styled Components"]}
          tags={["군복무", "팀"]}
        />
        <CareerCard
          time="2018 ~ 2021 (약 3년)"
          title="코딩학원 강사 및 프로젝트 멘토"
          techs={["C/C++", "알고리즘"]}
          tags={["파트타임"]}
        />
        <CareerCard
          time="2018 ~ 2021 (약 3년)"
          title="코딩학원 인트라넷, 채점서버 운영 및 유지보수"
          techs={["PHP", "Express.js", "MongoDB", "AWS"]}
          tags={["프리랜서", "개인"]}
        />
        <CareerCard
          time="2018.02 ~ 2019.10 (1년 9개월)"
          title="이비온(evon) 안드로이드 개발자"
          techs={["Android", "Java"]}
          tags={["정규직", "팀"]}
        />
      </div>
    </SectionCard>
  );
}
