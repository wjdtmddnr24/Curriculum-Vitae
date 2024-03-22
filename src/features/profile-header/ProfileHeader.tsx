import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/profile.png";

export function ProfileHeader() {
  return (
    <div className="w-max flex flex-col items-center justify-center justify-self-center py-16">
      <Image
        className="z-10 size-52 rounded-full object-cover self-center justify-self-center"
        draggable={false}
        src={profilePic}
        alt="Profile Image"
        priority
      />
      <div className="w-full mt-12 rounded-b justify-self-center flex flex-col items-center justify-center y-4">
        <div className="dark:text-slate-200 text-3xl mb-2 font-semibold">정승욱</div>
        <div className="text-xl mb-1 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold">
          소프트웨어 엔지니어
        </div>
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
  );
}
