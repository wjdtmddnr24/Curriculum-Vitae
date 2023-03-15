import {
  faCalendar,
  faChalkboardTeacher,
  faCode,
  faEnvelope,
  faGraduationCap,
  faJetFighterUp,
  faLocationDot,
  faSchoolFlag,
} from "@fortawesome/free-solid-svg-icons";
import { IconList } from "../icon-list/IconList";
import { ProfileHeader } from "./ProfileHeader";

export function Profile() {
  return (
    <div className="flex-none bg-white rounded shadow-2xl w-[80rem] h-[36rem] mx-auto grid grid-cols-[auto_1fr] divide-x">
      <ProfileHeader />
      <div className="grid grid-cols-2 p-16 pr-0 text-slate-600">
        <div>
          <div className="text-gray-800 font-bold text-xl mb-2">Info</div>
          <IconList className="space-y-0.5">
            <IconList.Item icon={faLocationDot}>서울, 한국</IconList.Item>
            <IconList.Item icon={faCalendar}>25살, 1999년생</IconList.Item>
            <IconList.Item icon={faEnvelope}>
              <span className="hover:underline hover:cursor-pointer">wjdtmddnr24@naver.com</span>
            </IconList.Item>
            <IconList.Item icon={faJetFighterUp}>공군에서 병역 수행중</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-gray-800 font-bold text-xl mb-2">Career</div>
          <IconList className="space-y-0.5">
            <IconList.Item icon={faJetFighterUp}>공군 교육훈련매체개발병 (2022~2023)</IconList.Item>
            <IconList.Item icon={faChalkboardTeacher}>코딩학원 강사 (2018~2021)</IconList.Item>
            <IconList.Item icon={faCode}>이비온(evon) 안드로이드 개발자 (2018~2019)</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-gray-800 font-bold text-xl mb-2">Education</div>
          <IconList className="space-y-0.5">
            <IconList.Item icon={faSchoolFlag}>숭실대학교 4학년 재학</IconList.Item>
            <IconList.Item icon={faGraduationCap}>선린인터넷고등학교 졸업</IconList.Item>
            <IconList.Item icon={faGraduationCap}>
              Kunming International Academy &
              <br />
              언주중학교 졸업
            </IconList.Item>
          </IconList>
        </div>

        <div>
          <div className="text-gray-800 font-bold text-xl mb-2">Certificates</div>
          <IconList>
            <IconList.Item>정보처리산업기사 (2021)</IconList.Item>
            <IconList.Item>정보기기운용기능사 (2017)</IconList.Item>
            <IconList.Item>정보처리기능사 (2016)</IconList.Item>
            <IconList.Item>Oracle Certified Java Programmer (2016)</IconList.Item>
          </IconList>
        </div>
      </div>
    </div>
  );
}
