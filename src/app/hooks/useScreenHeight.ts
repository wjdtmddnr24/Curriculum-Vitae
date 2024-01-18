import _ from "lodash";
import { useEffect, useRef, useState } from "react";

export const useScreenHeightRef = () => {
  const screenHeightRef = useRef<number>(0);

  useEffect(() => {
    screenHeightRef.current = window.innerHeight;

    const onResize = () => {
      screenHeightRef.current = window.innerHeight;
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screenHeightRef;
};

export const useDebouncedScreenHeight = (wait: number) => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const onResize = _.debounce(() => {
      setScreenHeight(window.innerHeight);
    }, wait);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [wait]);

  return screenHeight;
};
