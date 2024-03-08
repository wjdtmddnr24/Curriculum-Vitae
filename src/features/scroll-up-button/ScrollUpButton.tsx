import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShallow } from "zustand/react/shallow";
import FloatingActionButton from "../../components/floating-action-button/FloatingActionButton";
import { useSectionsStore } from "../section-container/useSectionsStore";

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
