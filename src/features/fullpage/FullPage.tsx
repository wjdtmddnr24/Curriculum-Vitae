import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Pagination } from "./Pagination";

interface FullPageProps {
  className?: string;
  sections?: ReactNode[];
}

export const FullPage = ({ className, sections = [] }: FullPageProps) => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  const fullPageRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  useEffect(() => {
    if (sections.length <= currentSectionIndex) {
      setCurrentSectionIndex(Math.max(sections.length - 1, 0));
    }
  }, [sections, currentSectionIndex]);

  useEffect(() => {
    setScreenHeight(window.innerHeight);

    const onResize = () => {
      isTransitioningRef.current = false;
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isTransitioningRef.current) return;
      if (e.deltaY > 0 && currentSectionIndex >= sections.length - 1) {
        return;
      }
      if (e.deltaY < 0 && currentSectionIndex <= 0) {
        return;
      }

      const nextCurrentSectionIndex = currentSectionIndex + (e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0);
      setCurrentSectionIndex(nextCurrentSectionIndex);
    };
    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, [currentSectionIndex, sections]);

  useEffect(() => {
    const offset = screenHeight * currentSectionIndex;

    if (fullPageRef.current?.style) {
      isTransitioningRef.current = true;
      fullPageRef.current.style.transform = `translateY(-${offset}px)`;
    }

    return () => {
      isTransitioningRef.current = false;
    };
  }, [currentSectionIndex, sections, screenHeight]);

  return (
    <div className="h-screen max-h-screen overflow-hidden relative">
      <div
        ref={fullPageRef}
        className={classNames(["transition-transform duration-300 ease-in", className])}
        onTransitionEnd={() => {
          isTransitioningRef.current = false;
        }}
      >
        {sections.map((s, idx) => (
          <section key={idx} className="h-screen max-h-screen overflow-hidden">
            {s}
          </section>
        ))}
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Pagination totalCount={sections.length} currentIndex={currentSectionIndex} />
      </div>
    </div>
  );
};
