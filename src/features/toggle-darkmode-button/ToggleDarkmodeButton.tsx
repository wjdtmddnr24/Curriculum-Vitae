import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export const ToggleDarkmodeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div
      className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 shadow-lg z-50 flex items-center justify-center text-2xl text-blue-500 dark:text-indigo-500 cursor-pointer hover:shadow-xl hover:scale-110 ease-in-out active:scale-105 duration-200"
      onClick={() => {
        isDark ? setTheme("light") : setTheme("dark");
      }}
    >
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
    </div>
  );
};
