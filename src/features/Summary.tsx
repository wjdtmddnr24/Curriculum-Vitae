import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faEnvelope, faJetFighterUp, faLocationDot, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/profile.png";

export function Summary() {
  return (
    <div className="mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-white w-[80rem] h-[36rem] grid grid-cols-[auto_1fr] rounded shadow-2xl">
        <div className="w-[26rem] items-center justify-center flex flex-col border-r pt-12 pb-6">
          <div className="relative flex justify-center items-center w-72 h-72 group rounded-full">
            <Image
              className="z-10 w-72 h-72 my-auto rounded-full object-cover self-center justify-self-center transition-transform ease-out"
              src={profilePic}
              alt="Profile Image"
            />
            <div className="absolute transition-all duration-300 w-[18rem] h-[18rem] rounded-full group-hover:w-[calc(18rem+12px)] group-hover:h-[calc(18rem+12px)] bg-gradient-to-br from-green-400 to-blue-500 animate-spin"></div>
          </div>
          <div className="w-full my-auto rounded-b justify-self-center flex flex-col items-center justify-center y-4">
            <div className="text-3xl mb-1">정승욱</div>
            <div className="text-lg mb-0.5 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 font-bold">
              소프트웨어 엔지니어
            </div>
            <div className="flex gap-1.5 text-slate-600 text-xl">
              <Link href="https://github.com/wjdtmddnr24" className="hover:text-slate-800 transition-colors">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="#" className="hover:text-slate-800 transition-colors">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="https://www.rocketpunch.com/@cindyjack369" className="hover:text-slate-800 transition-colors">
                <FontAwesomeIcon icon={faRocket} className="pt-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 p-8">
          <div>
            <div className="text-gray-800 font-bold text-xl mb-2">Info</div>
            <ul className="text-slate-600">
              <li>
                <FontAwesomeIcon icon={faLocationDot} fixedWidth /> 서울, 한국
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} fixedWidth /> 25살, 1999년생
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} fixedWidth />{" "}
                <span className="hover:underline hover:cursor-pointer">wjdtmddnr24@naver.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faJetFighterUp} fixedWidth /> 공군에서 병역 수행중
              </li>
            </ul>
          </div>
          <div>
            <div className="text-gray-800 font-bold text-xl mb-2">Career</div>
            <ul>
              <li>2022~2023 공군 교육훈련매체개발병</li>
              <li>2018~2021 코딩학원 강사</li>
              <li>2018~2019 스타트업 안드로이드 개발자</li>
            </ul>
          </div>
          <div>
            <div className="text-gray-800 font-bold text-xl mb-2">Education</div>
            <ul>
              <li>숭실대학교 졸업</li>
              <li>선린 인터넷 고등학교 졸업</li>
              <li>Kunming International Academy 재학</li>
              <li>언주중학교 졸업</li>
            </ul>
          </div>

          <div>
            <div className="text-gray-800 font-bold text-xl mb-2">Certificates</div>
            <ul>
              <li>2021 정보처리산업기사 </li>
              <li>2017 정보기기운용기능사 </li>
              <li>2016 정보처리기능사 자격증 </li>
              <li>2016 OCJP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
