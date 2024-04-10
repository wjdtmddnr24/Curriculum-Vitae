import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChalkboardTeacher,
  faCode,
  faEnvelope,
  faGraduationCap,
  faIdCard,
  faJetFighterUp,
  faLocationDot,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import GradientTypography from "@components/gradient-typography/GradientTypography";
import { IconList } from "@components/icon-list/IconList";
import SectionCard from "@components/section-card/SectionCard";
import profilePic from "@public/profile.png";

import { getAge } from "../../../utils/getAge";

export function Profile() {
  return (
    <SectionCard className="px-6 py-8 lg:p-0">
      <div className="w-full h-full grid lg:grid-cols-[auto,auto] lg:justify-start">
        <div className="flex flex-col gap-12 items-center justify-center justify-self-center shrink-0 py-20 lg:py-0 lg:px-20">
          <Image
            className="size-52 rounded-full object-cover self-center justify-self-center"
            draggable={false}
            src={profilePic}
            alt="Profile Image"
            priority
          />
          <div className="justify-self-center flex flex-col items-center justify-center">
            <div className="text-slate-800 dark:text-slate-200 text-3xl mb-2 font-semibold">정승욱</div>
            <GradientTypography className="text-xl mb-1 font-bold">소프트웨어 엔지니어</GradientTypography>
            <div className="flex gap-2 text-slate-600 dark:text-slate-300 text-xl">
              <Link
                href="https://github.com/wjdtmddnr24"
                className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href="https://www.facebook.com/wjdtmddnr24"
                className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                href="https://www.rocketpunch.com/@cindyjack369"
                className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faRocket} className="pt-1" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/wjdtmddnr24/"
                className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-[18rem_18rem] sm:justify-around content-center gap-8">
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
              <IconList.Item icon={faGraduationCap}>숭실대학교 졸업</IconList.Item>
              <IconList.Item icon={faGraduationCap}>선린인터넷고등학교 졸업</IconList.Item>
              <IconList.Item icon={faGraduationCap}>Kunming International Academy & 언주중학교 졸업</IconList.Item>
            </IconList>
          </div>
          <div>
            <div className="text-slate-800 dark:text-slate-200 font-bold text-xl mb-2">Certification</div>
            <IconList className="space-y-0.5 break-keep">
              <IconList.Item icon={faIdCard}>정보처리산업기사 (2021)</IconList.Item>
              <IconList.Item icon={faIdCard}>정보기기운용기능사 (2017)</IconList.Item>
              <IconList.Item icon={faIdCard}>정보처리기능사 (2016)</IconList.Item>
              <IconList.Item icon={faIdCard}>Oracle Certified Java Programmer (2016)</IconList.Item>
            </IconList>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
