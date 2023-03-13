import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../public/profile.png";
import Image from "next/image";
import Link from "next/link";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export function Summary() {
  return (
    <div className="mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-white w-[80rem] h-[36rem] grid grid-cols-[auto_1fr_1fr] rounded shadow-2xl">
        <div className="w-[26rem] items-center justify-center flex flex-col border-r-2 pt-12 pb-6">
          <Image
            className="w-72 h-72 my-auto rounded-full object-cover self-center justify-self-center"
            src={profilePic}
            alt="Profile Image"
          />
          <div className="w-full my-auto rounded-b justify-self-center flex flex-col items-center justify-center gap-1 py-4">
            <div className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 font-bold">
              소프트웨어 엔지니어
            </div>
            <div className="flex gap-1.5 text-slate-800 text-xl">
              <Link href="https://github.com/wjdtmddnr24">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faRocket} className="pt-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div>25살</div>
          <div>한국 서울 거주</div>
          <div>선린 인터넷 고등학교 졸업</div>
          <div>숭실대학교 졸업</div>
        </div>
        <div className="p-5">
          <div>2022~2023 공군 교육훈련매체개발병</div>
          <div>2018~2021 코딩학원 강사</div>
          <div>2018~2019 스타트업 안드로이드 개발자</div>
        </div>
      </div>
    </div>
  );
}
