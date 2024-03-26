import {
  faCalendar,
  faChalkboardTeacher,
  faCode,
  faEnvelope,
  faGraduationCap,
  faIdCard,
  faJetFighterUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/card/Card";
import { IconList } from "../../components/icon-list/IconList";
import { getAge } from "../../utils/getAge";
import { ProfileHeader } from "../profile-header/ProfileHeader";

export function Profile() {
  return (
    <Card className="grid lg:grid-cols-[repeat(2,1fr)] p-6 lg:p-0 lg:pr-16 dark:divide-slate-600">
      <ProfileHeader />
      <div className="grid lg:grid-cols-[18rem_18rem] content-center gap-8">
        <div>
          <div className="text-slate-800 dark:text-slate-200 font-bold text-xl mb-2">Info</div>
          <IconList className="space-y-0.5 break-keep">
            <IconList.Item icon={faLocationDot}>서울, 한국</IconList.Item>
            <IconList.Item icon={faCalendar}>{getAge()}살, 1999년생</IconList.Item>
            <IconList.Item icon={faEnvelope}>
              <span className="hover:underline hover:cursor-pointer">wjdtmddnr24@naver.com</span>
            </IconList.Item>
            <IconList.Item icon={faJetFighterUp}>공군 제대</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-slate-800 dark:text-slate-200 font-bold text-xl mb-2">Career</div>
          <IconList className="space-y-0.5 break-keep">
            <IconList.Item icon={faJetFighterUp}>공군 교육훈련매체개발병 (2022~2023)</IconList.Item>
            <IconList.Item icon={faChalkboardTeacher}>코딩학원 강사 (2018~2021)</IconList.Item>
            <IconList.Item icon={faCode}>이비온(evon) 안드로이드 개발자 (2018~2019)</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-slate-800 dark:text-slate-200 font-bold text-xl mb-2">Education</div>
          <IconList className="space-y-0.5 break-keep">
            <IconList.Item icon={faGraduationCap}>숭실대학교 4학년 졸업</IconList.Item>
            <IconList.Item icon={faGraduationCap}>선린인터넷고등학교 졸업</IconList.Item>
            <IconList.Item icon={faGraduationCap}>Kunming International Academy & 언주중학교 졸업</IconList.Item>
          </IconList>
        </div>
        <div>
          <div className="text-slate-800 dark:text-slate-200 font-bold text-xl mb-2">Certificates</div>
          <IconList className="space-y-0.5 break-keep">
            <IconList.Item icon={faIdCard}>정보처리산업기사 (2021)</IconList.Item>
            <IconList.Item icon={faIdCard}>정보기기운용기능사 (2017)</IconList.Item>
            <IconList.Item icon={faIdCard}>정보처리기능사 (2016)</IconList.Item>
            <IconList.Item icon={faIdCard}>Oracle Certified Java Programmer (2016)</IconList.Item>
          </IconList>
        </div>
      </div>
    </Card>
  );
}
