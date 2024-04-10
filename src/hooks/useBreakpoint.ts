"use client";

import _ from "lodash";
import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";

type ScreenVariant = "sm" | "md" | "lg" | "xl" | "2xl";

type Screen = { variant: ScreenVariant; width: number };

const screenVariant: ScreenVariant[] = ["sm", "md", "lg", "xl", "2xl"];

const fullConfig = resolveConfig(tailwindConfig);

const screens: Screen[] = _.chain(Object.entries(fullConfig.theme.screens))
  .filter(([k, v]) => screenVariant.findIndex((v) => v === k) !== -1 && _.isNumber(parseInt(v)))
  .map<Screen>(([k, v]) => ({ variant: k as ScreenVariant, width: parseInt(v) }))
  .sort(({ width: v1 }, { width: v2 }) => v1 - v2)
  .reverse()
  .value();

function getSuitableScreen(width: number): ScreenVariant {
  const screen = _.find(screens, ({ width: w }) => width >= w) || screens.at(-1) || { variant: "sm", width: 0 };
  return screen.variant;
}

export const useBreakpoint = (): ScreenVariant | undefined => {
  const [screenVariant, setScreenVariant] = useState<ScreenVariant>();

  useEffect(() => {
    const onResize = () => {
      const screen = getSuitableScreen(window.innerWidth);
      if (screenVariant !== screen) {
        setScreenVariant(screen);
      }
    };

    window.addEventListener("resize", onResize);

    if (!screenVariant) {
      const screen = getSuitableScreen(window.innerWidth);
      setScreenVariant(screen);
    }

    return () => window.removeEventListener("resize", onResize);
  }, [screenVariant]);

  return screenVariant;
};
