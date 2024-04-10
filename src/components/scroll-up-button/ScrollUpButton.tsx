import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShallow } from "zustand/react/shallow";

import { useSectionsStore } from "../../stores/sections-store-provider";
import FloatingActionButton from "../floating-action-button/FloatingActionButton";

export const ScrollUpButton = () => {
  const [pageIndex, setPageIndex] = useSectionsStore(
    useShallow((state) => [state.sectionIndex, state.setSectionIndex])
  );
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
