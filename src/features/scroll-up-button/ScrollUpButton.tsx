import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ScrollUpButtonProps {
  onClick?: () => void;
}
export const ScrollUpButton = ({ onClick }: ScrollUpButtonProps) => {
  return (
    <div
      className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-lg z-50 flex items-center justify-center text-xl text-blue-500 dark:text-indigo-500 hover:cursor-pointer hover:shadow-xl hover:scale-110 ease-in-out active:scale-105 duration-200"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};
