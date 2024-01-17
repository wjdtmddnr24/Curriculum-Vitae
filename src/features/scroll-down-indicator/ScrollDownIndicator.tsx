"use client";

import { useVScrollPosition } from "./useVScrollPosition";
import { useWindowheight } from "./useWindowHeight";

interface ScrollDownIndicatorProps {
  onClick?: () => void;
}

export const ScrollDownIndicator = ({ onClick }: ScrollDownIndicatorProps) => {
  const scrollY = useVScrollPosition();
  const height = useWindowheight();

  const opacity = height > 0 ? 1 - Math.min(height / 2, scrollY) / (height / 2) : 0;

  return (
    <div
      className={`flex flex-col items-center text-lg text-gray-100 dark:text-gray-300 ${opacity === 0 ? "hidden" : ""}`}
      style={{ opacity }}
    >
      <div>아래에 더 많은 내용이 있어요</div>
      <svg
        onClick={onClick}
        className={`w-12 animate-bounce mt-4 stroke-gray-100 dark:stroke-gray-300 ${onClick ? "cursor-pointer" : ""}`}
        strokeWidth="20"
        fill="none"
        viewBox="0 0 300 300"
      >
        <polyline points="0,110 150,200 300,110" />
      </svg>
    </div>
  );
};
