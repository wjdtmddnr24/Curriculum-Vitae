import { useEffect, useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export const MobileWidthThreshold = parseInt(fullConfig.theme.screens.lg) ?? 1024;

export const useWindowWidth = (): number | undefined => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const onResize = () => {
      const _width = window.innerWidth;
      if (width !== _width) {
        setWidth(_width);
      }
    };

    window.addEventListener("resize", onResize);

    if (width === undefined) {
      const width = window.innerWidth;
      setWidth(width);
    }

    return () => window.removeEventListener("resize", onResize);
  }, [width]);

  return width;
};
