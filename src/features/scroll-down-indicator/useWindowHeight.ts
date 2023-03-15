import { useEffect, useState } from "react";

export const useWindowheight = () => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [setHeight]);

  return height;
};
