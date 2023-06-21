import classNames from "classnames";
import _ from "lodash";
import { shallow } from "zustand/shallow";
import { useFullPageStore } from "./useFullPageStore";

export const Pagination = () => {
  const [totalSectionCount, currentPageIndex, setPageIndex] = useFullPageStore(
    (state) => [state.metadatas.length, state.pageIndex, state.setPageIndex],
    shallow,
  );
  return (
    <div className="flex flex-col gap-1">
      {_.range(totalSectionCount).map((num) => (
        <Item key={num} isCurrentPage={num === currentPageIndex} onClick={() => setPageIndex(num)} />
      ))}
    </div>
  );
};

interface ItemProps {
  isCurrentPage?: boolean;
  onClick: () => void;
}

const Item = ({ isCurrentPage, onClick }: ItemProps) => {
  return (
    <div
      className="rounded-full w-4 h-4 bg-slate-700/50 dark:bg-slate-200/50 flex justify-center items-center cursor-pointer hover:scale-110 ease-in-out duration-200"
      onClick={onClick}
    >
      <div
        className={classNames([
          "rounded-full w-2 h-2 transition-color duration-300",
          isCurrentPage ? "bg-slate-50/80 dark:bg-slate-950/80" : "bg-transparent",
        ])}
      ></div>
    </div>
  );
};
