import SectionCard from "@components/section-card/SectionCard";
import GradientTypography from "@components/gradient-typography/GradientTypography";

export function Awards() {
  return (
    <SectionCard className="px-6 py-8 lg:p-10">
      <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
        Awards
      </GradientTypography>
      <div className="flex flex-col flex-wrap lg:max-h-[34rem] gap-x-8 gap-y-4 overflow-x-auto">
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2024
          </GradientTypography>
          <ul>
            <li>숭실대학교 소프트웨어학부 - 학과(부) 우등상</li>
          </ul>
        </div>

        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2023
          </GradientTypography>
          <ul>
            <li>제20회 TOPCIT 정기평가 성적 우수자 대학생 부문 - 동상</li>
            <li>제19회 TOPCIT 정기평가 성적 우수자 군인 부문 - 대상(국방부 장관상)</li>
            <li>제5회 공군 창의·혁신 아이디어 공모 해커톤 AI 프로그램 부문 - 대상</li>
          </ul>
        </div>

        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2021
          </GradientTypography>
          <ul>
            <li>2021 하반기 TOPCIT 정기평가 교내 성적 우수자 - 최우수상</li>
            <li>2021 상반기 TOPCIT 정기평가 교내 성적 우수자 - 우수상</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2020
          </GradientTypography>
          <ul>
            <li>2020 하반기 TOPCIT 특별평가 교내 성적 우수자 - 우수상</li>
            <li>2020 상반기 TOPCIT 특별평가 교내 성적 우수자 - 최우수상</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2019
          </GradientTypography>
          <ul>
            <li>제12회 TOPCIT 정기평가 교내 성적우수자 - 우수상</li>
            <li>SCON 프로그래밍 경진대회 - 4th Prize</li>
            <li>숭실대학교 소프트웨어학부 소프트웨어 공모전 - 대상</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2018
          </GradientTypography>
          <ul>
            <li>소프트웨어학부 성적우수자 - 최고학점상</li>
            <li>숭실대학교 창의적공학설계 - 대상</li>
            <li>숭실 알고리즘 대회 - 우수상</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2017
          </GradientTypography>
          <ul>
            <li>서강대학교 총장배 전국 고등학생 알고리즘 경진대회 - 부총장상</li>
            <li>제2회 국민대학교 알고리즘 대회 - 장려상</li>
            <li>선린정보올림피아드 대회 - 은상</li>
            <li>선린알고리즘 대회 - 동상</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2016
          </GradientTypography>
          <ul>
            <li>디지털 콘텐츠 경진대회 - 은상</li>
            <li>네트워크 구축 대회 - 동상</li>
            <li>Smarteen App Challenge - 장려상</li>
            <li>선린정보올림피아드 경시대회 - 금상</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            2015
          </GradientTypography>
          <ul>
            <li>2학기 교내 수학경시대회 - 동상</li>
            <li>선린정보올림피아드 경시대회 - 장려상</li>
          </ul>
        </div>
      </div>

      <ul className="hidden gap-2 grid-rows-[repeat(12,1fr)] grid-flow-col">
        <li>숭실대학교 소프트웨어학부 - 학과(부) 우등상</li>
        <li>제20회 TOPCIT 정기평가 성적 우수자 대학생 부문 - 동상</li>
        <li>제19회 TOPCIT 정기평가 성적 우수자 군인 부문 - 대상(국방부 장관상)</li>
        <li>제5회 공군 창의·혁신 아이디어 공모 해커톤 AI 프로그램 부문 - 대상</li>
        <li>2021 하반기 TOPCIT 정기평가 교내 성적 우수자 - 최우수상</li>
        <li>2021 상반기 TOPCIT 정기평가 교내 성적 우수자 - 우수상</li>
        <li>2020 하반기 TOPCIT 특별평가 교내 성적 우수자 - 우수상</li>
        <li>2020 상반기 TOPCIT 특별평가 교내 성적 우수자 - 최우수상</li>
        <li>제12회 TOPCIT 정기평가 교내 성적우수자 - 우수상</li>
        <li>SCON 프로그래밍 경진대회 - 4th Prize</li>
        <li>숭실대학교 소프트웨어학부 소프트웨어 공모전 - 대상</li>
        <li>소프트웨어학부 성적우수자 - 최고학점상</li>
        <li>숭실대학교 창의적공학설계 - 대상</li>
        <li>숭실 알고리즘 대회 - 우수상</li>
        <li>서강대학교 총장배 전국 고등학생 알고리즘 경진대회 - 부총장상</li>
        <li>제2회 국민대학교 알고리즘 대회 - 장려상</li>
        <li>선린정보올림피아드 대회 - 은상</li>
        <li>선린알고리즘 대회 - 동상</li>
        <li>디지털 콘텐츠 경진대회 - 은상</li>
        <li>네트워크 구축 대회 - 동상</li>
        <li>Smarteen App Challenge - 장려상</li>
        <li>선린정보올림피아드 경시대회 - 금상</li>
        <li>2학기 교내 수학경시대회 - 동상</li>
        <li>선린정보올림피아드 경시대회 - 장려상</li>
      </ul>
    </SectionCard>
  );
}
