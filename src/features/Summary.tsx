import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../public/profile.png";
import Image from "next/image";
import Link from "next/link";

export function Summary() {
  return (
    <div className="mx-auto flex justify-center items-center min-h-screen">
      <div className="rounded shadow-2xl w-[24rem] grid grid-rows-[1fr_auto] hover:scale-105 duration-200 transition-all">
        <Image className="w-full h-96 rounded-t object-cover" src={profilePic} alt="Profile Image" />
        <div className="bg-white w-full rounded-b justify-self-center flex flex-col items-center justify-center gap-1 py-4">
          <div className="text-2xl">정승욱</div>
          <div className="text-green-500">소프트웨어 엔지니어</div>
          <div className="flex gap-1.5 text-slate-800">
            <Link href="https://github.com/wjdtmddnr24">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[30rem] w-[40rem] bg-slate-50 rounded-r shadow grid grid-cols-2 divide-x-2">
        <div className="p-5">
          <div>25살</div>
          <div>한국 서울 거주</div>
          <div>숭실대학교 졸업</div>
        </div>
        <div className="p-5">
          <div>공군 교육훈련매체개발병</div>
          <div>코딩학원 강사</div>
          <div>스타트업 안드로이드 개발자</div>
        </div>
      </div>
    </div>
  );
}
