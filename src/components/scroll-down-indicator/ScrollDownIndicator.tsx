"use client";

import { Transition } from "@headlessui/react";

import { useSectionsStore } from "../../stores/sections-store-provider";

export const ScrollDownIndicator = () => {
  const isSettledAtFirstPage = useSectionsStore((state) => state.sectionIndex === 0);

  // if (!isSettledAtFirstPage) return null;

  return (
    <Transition
      show={isSettledAtFirstPage}
      enter="transition delay-300 duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition duration-200"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <div className={`flex flex-col items-center text-lg text-gray-100 dark:text-gray-300`}>
        <div>아래에 더 많은 내용이 있어요</div>
        <ArrowDownIcon />
      </div>
    </Transition>
  );
};

const ArrowDownIcon = () => {
  return (
    <svg
      className={`w-12 animate-bounce mt-4 stroke-gray-100 dark:stroke-gray-300`}
      strokeWidth="20"
      fill="none"
      viewBox="0 0 300 300"
    >
      <polyline points="0,110 150,200 300,110" />
    </svg>
  );
};
