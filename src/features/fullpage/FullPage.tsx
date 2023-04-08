import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { shallow } from "zustand/shallow";
import { Pagination } from "./Pagination";
import { useFullPageStore } from "./useFullPageStore";

interface FullPageProps {
  className?: string;
  sections?: ReactNode[];
}

export const FullPage = ({ className, sections = [] }: FullPageProps) => {
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
    <div className="h-full max-h-full overflow-hidden relative">
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
          className={classNames(["transition-transform duration-700 ease-in-out", className])}
          style={{
            transform: `translateY(-${screenHeight * currentSectionIndex}px)`,
          }}
        >
          {sections.map((s, idx) => (
            <section key={idx} className="h-screen max-h-screen overflow-hidden">
              {s}
            </section>
          ))}
        </div>
      </Transition>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Pagination
          totalCount={sections.length}
          currentIndex={currentSectionIndex}
          onClick={(index) => setCurrentSectionIndex(index)}
        />
      </div>
    </div>
  );
};
