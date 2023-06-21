import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { shallow } from "zustand/shallow";
import { useFullPageStore } from "../../fullpage/useFullPageStore";

export const ScrollUpButton = () => {
  const [pageIndex, setPageIndex] = useFullPageStore((state) => [state.pageIndex, state.setPageIndex], shallow);
  const onClick = () => setPageIndex(0);

  if (pageIndex !== 0) {
  } else {
  }

  return (
    <div
      className={classNames(
        "w-14 h-14 rounded-full bg-white dark:bg-slate-900 shadow-lg z-50 flex items-center justify-center text-2xl text-blue-500 dark:text-indigo-500 hover:cursor-pointer hover:shadow-xl hover:scale-110 ease-in-out active:scale-105 duration-200",
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};
