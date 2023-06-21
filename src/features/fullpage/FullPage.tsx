import { ReactNode, useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { shallow } from "zustand/shallow";
import Section from "./Section";
import { useFullPageStore } from "./useFullPageStore";

interface FullPageProps {
  sections?: ReactNode[];
}

export const FullPage = ({ sections = [] }: FullPageProps) => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const fullPageRef = useRef<HTMLDivElement>(null);
  const [inProp, setInProp] = useState<boolean>(false);
  const [isWheelable, setIsWheelable] = useState<boolean>(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useFullPageStore(
    (state) => [state.pageIndex, state.setPageIndex],
    shallow,
  );
  useEffect(() => {
    setScreenHeight(window.innerHeight);

    const onResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (
        !isWheelable ||
        (e.deltaY > 0 && currentSectionIndex >= sections.length - 1) ||
        (e.deltaY < 0 && currentSectionIndex <= 0)
      ) {
        return;
      }

      const nextCurrentSectionIndex = currentSectionIndex + (e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0);
      setCurrentSectionIndex(nextCurrentSectionIndex);
      setInProp(true);
    };
    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, [currentSectionIndex, isWheelable, sections, setCurrentSectionIndex]);

  return (
    <div className="h-screen max-h-screen relative overflow-hidden">
      <Transition
        in={inProp}
        nodeRef={fullPageRef}
        timeout={350}
        onEnter={() => setIsWheelable(false)}
        onExited={() => setIsWheelable(true)}
        addEndListener={() => setInProp(false)}
      >
        <div
          ref={fullPageRef}
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${screenHeight * currentSectionIndex}px)`,
          }}
        >
          {sections}
        </div>
      </Transition>
    </div>
  );
};

FullPage.Section = Section;
