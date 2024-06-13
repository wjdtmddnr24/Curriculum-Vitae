import GradientTypography from "@components/gradient-typography/GradientTypography";
import SectionCard from "@components/section-card/SectionCard";

import TitledList from "../../titled-list/TitledList";

const { Title, List, Item } = TitledList;

export function Awards() {
  return (
    <SectionCard className="px-6 py-8 lg:p-10">
      <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
        Awards
      </GradientTypography>
      <div className="flex flex-col flex-wrap lg:max-h-[34rem] gap-x-8 gap-y-4 overflow-x-auto">
        <TitledList>
          <Title>2024</Title>
          <List>
            <Item>숭실대학교 소프트웨어학부 - 학과(부) 우등상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2023</Title>
          <List>
            <Item>제20회 TOPCIT 정기평가 성적 우수자 대학생 부문 - 동상</Item>
            <Item>제19회 TOPCIT 정기평가 성적 우수자 군인 부문 - 대상(국방부 장관상)</Item>
            <Item>제5회 공군 창의·혁신 아이디어 공모 해커톤 AI 프로그램 부문 - 대상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2021</Title>
          <List>
            <Item>2021 하반기 TOPCIT 정기평가 교내 성적 우수자 - 최우수상</Item>
            <Item>2021 상반기 TOPCIT 정기평가 교내 성적 우수자 - 우수상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2020</Title>
          <List>
            <Item>2020 하반기 TOPCIT 특별평가 교내 성적 우수자 - 우수상</Item>
            <Item>2020 상반기 TOPCIT 특별평가 교내 성적 우수자 - 최우수상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2019</Title>
          <List>
            <Item>제12회 TOPCIT 정기평가 교내 성적우수자 - 우수상</Item>
            <Item>SCON 프로그래밍 경진대회 - 4th Prize</Item>
            <Item>숭실대학교 소프트웨어학부 소프트웨어 공모전 - 대상</Item>
            <Item>소프트웨어학부 성적우수자 - 최고학점상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2018</Title>
          <List>
            <Item>숭실대학교 창의적공학설계 - 대상</Item>
            <Item>숭실 알고리즘 대회 - 우수상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2017</Title>
          <List>
            <Item>서강대학교 총장배 전국 고등학생 알고리즘 경진대회 - 부총장상</Item>
            <Item>제2회 국민대학교 알고리즘 대회 - 장려상</Item>
            <Item>선린정보올림피아드 대회 - 은상</Item>
            <Item>선린알고리즘 대회 - 동상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2016</Title>
          <List>
            <Item>디지털 콘텐츠 경진대회 - 은상</Item>
            <Item>네트워크 구축 대회 - 동상</Item>
            <Item>Smarteen App Challenge - 장려상</Item>
            <Item>한양공업고등학교 제1회 프로그래밍 경진대회 - 대상</Item>
            <Item>선린정보올림피아드 경시대회 - 금상</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>2015</Title>
          <List>
            <Item>2학기 교내 수학경시대회 - 동상</Item>
            <Item>선린정보올림피아드 경시대회 - 장려상</Item>
          </List>
        </TitledList>
      </div>
    </SectionCard>
  );
}
