"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import FloatingActionButton from "../../components/floating-action-button/FloatingActionButton";

export const ToggleDarkmodeButton = () => {
  const [isCSR, setIsCSR] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (!isCSR) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <FloatingActionButton
      onClick={() => {
        isDark ? setTheme("light") : setTheme("dark");
      }}
    >
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
    </FloatingActionButton>
  );
};
