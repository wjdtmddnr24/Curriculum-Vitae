"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { sections } from "../../app/sections";
import { useSectionsStore } from "../section-container/useSectionsStore";

const NamedIndex = () => {
  const titles = sections.map((s) => s.title);
  const currentPageIndex = useSectionsStore((state) => state.sectionIndex);

  return (
    <ul className="flex flex-col gap-1">
      {titles.map((title, index) => (
        <Item key={index} title={title} index={index} isSelected={index === currentPageIndex} />
      ))}
    </ul>
  );
};

export default NamedIndex;

interface ItemProps {
  title: string;
  index: number;
  isSelected: boolean;
}

const Item = ({ title, index, isSelected }: ItemProps) => {
  const setPageIndex = useSectionsStore((state) => state.setSectionIndex);
  return (
    <li className="flex relative" onClick={() => setPageIndex(index)}>
      <span
        className={classNames(
          "mr-3 ml-auto text-2xl cursor-pointer transition-all",
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
