import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import PageCard from "@components/page-card/PageCard";

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <PageCard className="lg:my-[12vh]">
        <nav className="mb-4">
          <Link
            href="/"
            className="px-1 py-0.5 text-slate-500 hover:text-slate-600 hover:bg-slate-100 dark:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-700 rounded transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} fixedWidth /> <span>메인으로 돌아가기</span>
          </Link>
        </nav>
        {children}
      </PageCard>
    </div>
  );
}
