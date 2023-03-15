import { useEffect, useState } from "react";

export const useVScrollPosition = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [setPosition]);

  return position;
};
