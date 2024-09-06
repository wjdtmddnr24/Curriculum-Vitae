import Link from "next/link";
import { ReactNode } from "react";

interface CareerCardProps {
  time: ReactNode;
  title: ReactNode;
  techs: ReactNode[];
  tags: ReactNode[];
}

const CareerCard = ({ time, title, techs, tags }: CareerCardProps) => {
  return (
    <Link
      href={"#"}
      className="p-4 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 outline outline-1 outline-slate-300 dark:outline-slate-700 rounded-md relative group cursor-pointer"
    >
      <div className="text-xs text-slate-600 dark:text-slate-400">{time}</div>
      <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1.5">{title}</h3>
      <div className="flex gap-4">
        <div className="min-h-[2.875rem] flex flex-wrap gap-1.5 items-start">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="text-xs w-max h-max px-1.5 py-0.5 border border-slate-700 dark:border-slate-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-1.5 items-end shrink-0 ml-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-slate-50 dark:text-slate-300 font-semibold px-1.5 py-0.5 bg-slate-500 dark:bg-slate-600 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CareerCard;
