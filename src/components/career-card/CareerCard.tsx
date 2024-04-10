import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface CareerCardProps {
  time: ReactNode;
  title: ReactNode;
  techs: ReactNode[];
  tags: ReactNode[];
}

const CareerCard = ({ time, title, techs, tags }: CareerCardProps) => {
  return (
    <div className="p-4 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 outline outline-1 outline-slate-200 dark:outline-slate-600 rounded-md shadow-sm relative group cursor-pointer">
      <FontAwesomeIcon
        className="absolute top-4 right-4 text-slate-500 dark:text-slate-300 dark:group-hover:text-slate-200 group-hover:text-slate-600"
        icon={faArrowUpRightFromSquare}
      />
      <span className="text-xs text-slate-400 dark:text-slate-400">{time}</span>
      <h3 className="text-base font-bold mb-1.5">{title}</h3>
      <div className="flex gap-4">
        <div className="min-h-[2.875rem] flex flex-wrap gap-1.5 items-start">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="text-xs text-slate-500 dark:text-slate-400 w-max h-max px-1.5 py-0.5 border border-slate-500 dark:border-slate-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-1.5 items-end shrink-0 ml-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-slate-50 dark:text-slate-300 font-semibold px-1 py-0.5 bg-slate-500 dark:bg-slate-600 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
