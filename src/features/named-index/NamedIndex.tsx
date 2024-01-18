"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { sections } from "../../app/sections";
import { useSectionsStore } from "../section-container/useSectionsStore";

interface NamedIndexProps {
  sectionIndex: number;
  onSectionNameClick: (index: number) => void;
}

const NamedIndex = ({ onSectionNameClick, sectionIndex }: NamedIndexProps) => {
  const titles = sections.map((s) => s.title);

  return (
    <ul className="flex flex-col items-end gap-1">
      {titles.map((title, index) => (
        <Item
          key={index}
          title={title}
          index={index}
          isSelected={index === sectionIndex}
          onClick={() => onSectionNameClick(index)}
        />
      ))}
    </ul>
  );
};

export default NamedIndex;

interface ItemProps {
  title: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const Item = ({ title, index, isSelected, onClick }: ItemProps) => {
  return (
    <li className="flex relative" onClick={onClick}>
      <span
        className={classNames(
          "mr-3 text-2xl cursor-pointer transition-all",
          isSelected
            ? "text-slate-50 dark:text-slate-100 duration-700"
            : "text-slate-300 dark:text-slate-400 font-light hover:text-slate-200"
        )}
      >
        {title}
      </span>
      {isSelected && (
        <motion.div
          className="absolute w-[3px] -right-1 top-0 bottom-0 bg-slate-50 dark:bg-slate-300"
          layoutId="line"
        />
      )}
    </li>
  );
};
