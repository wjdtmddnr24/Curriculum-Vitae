import Card from "./ui/Card";

export function Awards() {
  return (
    <Card className="p-10" height="min-h-[35rem]">
      <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-8">
        Awards
      </div>
      <ul className="grid gap-4 grid-rows-[repeat(12,1fr)] grid-flow-col text-lg">
        <li>2023 | 제20회 TOPCIT 정기평가 성적 우수자 대학생 부문 - 동상</li>
        <li>2023 | 제19회 TOPCIT 정기평가 성적 우수자 군인 부문 - 대상(국방부 장관상)</li>
        <li>2023 | 제5회 공군 창의·혁신 아이디어 공모 해커톤 AI 프로그램 부문 - 대상</li>
        <li>2021 | 2021 하반기 TOPCIT 정기평가 교내 성적 우수자 - 최우수상</li>
        <li>2021 | 2021 상반기 TOPCIT 정기평가 교내 성적 우수자 - 우수상</li>
        <li>2020 | 2020 하반기 TOPCIT 특별평가 교내 성적 우수자 - 우수상</li>
        <li>2020 | 2020 상반기 TOPCIT 특별평가 교내 성적 우수자 - 최우수상</li>
        <li>2019 | 제12회 TOPCIT 정기평가 교내 성적우수자 - 우수상</li>
        <li>2019 | SCON 프로그래밍 경진대회 - 4th Prize</li>
        <li>2019 | 숭실대학교 소프트웨어학부 소프트웨어 공모전 - 대상</li>
        <li>2018 | 소프트웨어학부 성적우수자 - 최고학점상</li>
        <li>2018 | 숭실대학교 창의적공학설계 - 대상</li>
        <li>2018 | 숭실 알고리즘 대회 - 우수상</li>
        <li>2017 | 서강대학교 총장배 전국 고등학생 알고리즘 경진대회 - 부총장상</li>
        <li>2017 | 제2회 국민대학교 알고리즘 대회 - 장려상</li>
        <li>2017 | 선린정보올림피아드 대회 - 은상</li>
        <li>2017 | 선린알고리즘 대회 - 동상</li>
        <li>2017 | 디지털 콘텐츠 경진대회 - 은상</li>
        <li>2016 | 네트워크 구축 대회 - 동상</li>
        <li>2016 | Smarteen App Challenge - 장려상</li>
        <li>2016 | 선린정보올림피아드 경시대회 - 금상</li>
        <li>2015 | 2학기 교내 수학경시대회 - 동상</li>
        <li>2015 | 선린정보올림피아드 경시대회 - 장려상</li>
      </ul>
    </Card>
  );
}
