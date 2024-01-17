import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useShallow } from "zustand/react/shallow";
import FloatingActionButton from "../../app/components/floating-action-button/FloatingActionButton";
import { useFullPageStore } from "../fullpage/useFullPageStore";

export const ScrollUpButton = () => {
  const [pageIndex, setPageIndex] = useFullPageStore(useShallow((state) => [state.pageIndex, state.setPageIndex]));
  const onClick = () => setPageIndex(0);

  if (pageIndex !== 0) {
  } else {
  }

  return (
    <FloatingActionButton onClick={onClick}>
      <FontAwesomeIcon icon={faArrowUp} />
    </FloatingActionButton>
  );
};
