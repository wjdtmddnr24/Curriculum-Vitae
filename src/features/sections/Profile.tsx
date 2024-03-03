import {
  faCalendar,
  faChalkboardTeacher,
  faCode,
  faEnvelope,
  faGraduationCap,
  faJetFighterUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../app/components/card/Card";
import { IconList } from "../../app/components/icon-list/IconList";
import { getAge } from "../../utils/getAge";
import { ProfileHeader } from "../profile-header/ProfileHeader";

export function Profile() {
  return (
    <Card className="grid grid-cols-[auto_1fr] divide-x dark:divide-slate-600">
      <ProfileHeader />
      <div className="grid grid-cols-2 p-16 pr-0 pt-24 text-slate-600 dark:text-slate-300 text-lg">
        <div>
          <div className="text-slate-700 dark:text-slate-200 font-bold text-2xl mb-2.5">Info</div>
          <IconList className="space-y-0.5">
            <IconList.Item icon={faLocationDot}>서울, 한국</IconList.Item>
            <IconList.Item icon={faCalendar}>{getAge()}살, 1999년생</IconList.Item>
            <IconList.Item icon={faEnvelope}>
              <span className="hover:underline hover:cursor-pointer">wjdtmddnr24@naver.com</span>
            </IconList.Item>
            <IconList.Item icon={faJetFighterUp}>공군 제대</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-slate-700 dark:text-slate-200 font-bold text-2xl mb-2.5">Career</div>
          <IconList className="space-y-0.5">
            <IconList.Item icon={faJetFighterUp}>공군 교육훈련매체개발병 (2022~2023)</IconList.Item>
            <IconList.Item icon={faChalkboardTeacher}>코딩학원 강사 (2018~2021)</IconList.Item>
            <IconList.Item icon={faCode}>이비온(evon) 안드로이드 개발자 (2018~2019)</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-slate-700 dark:text-slate-200 font-bold text-2xl mb-2.5">Education</div>
          <IconList className="space-y-0.5">
            <IconList.Item icon={faGraduationCap}>숭실대학교 4학년 졸업</IconList.Item>
            <IconList.Item icon={faGraduationCap}>선린인터넷고등학교 졸업</IconList.Item>
            <IconList.Item icon={faGraduationCap}>
              Kunming International Academy &
              <br />
              언주중학교 졸업
            </IconList.Item>
          </IconList>
        </div>

        <div>
          <div className="text-slate-700 dark:text-slate-200 font-bold text-2xl mb-2.5">Certificates</div>
          <IconList>
            <IconList.Item>정보처리산업기사 (2021)</IconList.Item>
            <IconList.Item>정보기기운용기능사 (2017)</IconList.Item>
            <IconList.Item>정보처리기능사 (2016)</IconList.Item>
            <IconList.Item>Oracle Certified Java Programmer (2016)</IconList.Item>
          </IconList>
        </div>
      </div>
    </Card>
  );
}
