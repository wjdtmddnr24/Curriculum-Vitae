import { useEffect, useState } from "react";

export const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  useEffect(() => {
    setScreenHeight(window.innerHeight);

    const onResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screenHeight;
};
