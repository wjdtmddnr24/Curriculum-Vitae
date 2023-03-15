import { faCalendar, faEnvelope, faJetFighterUp, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileHeader } from "./ProfileHeader";

export function Profile() {
  return (
    <div className="mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-white w-[80rem] h-[36rem] grid grid-cols-[auto_1fr] rounded shadow-2xl divide-x">
        <ProfileHeader />
        <div className="grid grid-cols-2 p-8 pt-16">
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
              <li>
                <div>2022~2023</div>
                공군 교육훈련매체개발병
              </li>
              <li>
                <div>2018~2021</div>
                코딩학원 강사
              </li>
              <li>
                <div>2018~2019</div>
                스타트업 안드로이드 개발자
              </li>
            </ul>
          </div>
          <div>
            <div className="text-gray-800 font-bold text-xl mb-2">Education</div>
            <ul>
              <li>숭실대학교 졸업</li>
              <li>선린인터넷고등학교 졸업</li>
              <li>Kunming International Academy 재학</li>
              <li>언주중학교 졸업</li>
            </ul>
          </div>

          <div>
            <div className="text-gray-800 font-bold text-xl mb-2">Certificates</div>
            <ul>
              <li>
                <div>2021</div> 정보처리산업기사
              </li>
              <li>
                <div>2017</div> 정보기기운용기능사
              </li>
              <li>
                <div>2016</div> 정보처리기능사 <br /> Oracle Certified Java Programmer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
