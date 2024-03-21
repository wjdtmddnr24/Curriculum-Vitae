import _ from "lodash";
import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

type ScreenVariant = "sm" | "md" | "lg" | "xl" | "2xl" | string;

type Screen = [ScreenVariant, number];

const fullConfig = resolveConfig(tailwindConfig);

const screens: Screen[] = _.chain(Object.entries(fullConfig.theme.screens))
  .map<[string, number]>(([key, value]) => [key, parseInt(value)])
  .filter(([, v]) => _.isNumber(v))
  .sort(([, v1], [, v2]) => v1 - v2)
  .reverse()
  .value();

function getSuitableScreen(width: number): ScreenVariant {
  const screen = _.find(screens, ([, w]) => width >= w) || screens.at(-1) || ["sm", 0];
  return screen[0];
}

export const useBreakpoint = (): ScreenVariant => {
  const [screenVariant, setScreenVariant] = useState<ScreenVariant>("sm");

  useEffect(() => {
    const onResize = _.debounce(() => {
      const screen = getSuitableScreen(window.innerWidth);
      setScreenVariant(screen);
      console.log(screen);
    }, 100);

    window.addEventListener("resize", onResize);

    getSuitableScreen(window.innerWidth);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screenVariant;
};
