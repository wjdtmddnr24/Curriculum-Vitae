"use client";

import { useSectionsStore } from "../../stores/sections-store-provider";

export const ScrollDownIndicator = () => {
  const isSettledAtFirstPage = useSectionsStore((state) => state.sectionIndex === 0);

  if (!isSettledAtFirstPage) return null;

  return (
    <div className={`flex flex-col items-center text-lg text-gray-100 dark:text-gray-300`}>
      <div>아래에 더 많은 내용이 있어요</div>
      <ArrowDownIcon />
    </div>
  );
};

const ArrowDownIcon = () => {
  return (
    <svg
      className={`w-12 animate-bounce  mt-4 stroke-gray-100 dark:stroke-gray-300`}
      strokeWidth="20"
      fill="none"
      viewBox="0 0 300 300"
    >
      <polyline points="0,110 150,200 300,110" />
    </svg>
  );
};
