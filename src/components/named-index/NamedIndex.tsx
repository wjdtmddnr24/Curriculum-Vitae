"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { SectionInfo } from "../../components/section-container/SectionContainer";

interface NamedIndexProps {
  currentIndex: number;
  onSectionNameClick: (index: number) => void;
  sections: SectionInfo[];
}

const NamedIndex = ({ onSectionNameClick, currentIndex, sections }: NamedIndexProps) => {
  const titles = sections.map((s) => s.title);

  return (
    <ul className="flex flex-col items-end gap-1">
      {titles.map((title, index) => (
        <Item key={index} title={title} isSelected={index === currentIndex} onClick={() => onSectionNameClick(index)} />
      ))}
    </ul>
  );
};

export default NamedIndex;

interface ItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const Item = ({ title, isSelected, onClick }: ItemProps) => {
  return (
    <li className="flex relative" onClick={onClick}>
      <span
        className={classNames(
          "mr-2 text-xl cursor-pointer transition-colors",
          isSelected
            ? "text-slate-50 dark:text-slate-100"
            : "text-slate-300 dark:text-slate-400 font-light hover:text-slate-200"
        )}
      >
        {title}
      </span>
      {isSelected && (
        <motion.div
          className="absolute w-[0.18rem] -right-1 top-0 bottom-0 bg-slate-50 dark:bg-slate-300"
          layoutId="line"
        />
      )}
    </li>
  );
};
