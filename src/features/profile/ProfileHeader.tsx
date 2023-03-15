import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/profile.png";

export function ProfileHeader() {
  return (
    <div className="w-[26rem] items-center flex flex-col pt-16 pb-6">
      <div className="relative flex justify-center items-center w-72 h-72 group rounded-full">
        <Image
          className="z-10 w-72 h-72 my-auto rounded-full object-cover self-center justify-self-center transition-transform ease-out"
          src={profilePic}
          alt="Profile Image"
        />
        <div className="absolute transition-all duration-300 w-[18rem] h-[18rem] rounded-full group-hover:w-[calc(18rem+12px)] group-hover:h-[calc(18rem+12px)] bg-gradient-to-br from-green-400 to-blue-500 animate-spin"></div>
      </div>
      <div className="w-full mt-12 rounded-b justify-self-center flex flex-col items-center justify-center y-4">
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
          <Link href="#" className="hover:text-slate-800 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
}
