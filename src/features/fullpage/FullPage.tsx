import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";

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
  }, [currentSectionIndex, sections, isTransitioningRef]);

  useEffect(() => {
    const offset = screenHeight * currentSectionIndex;

    if (fullPageRef.current?.style) {
      isTransitioningRef.current = true;
      fullPageRef.current.style.transform = `translateY(-${offset}px)`;
    }

    return () => {
      isTransitioningRef.current = false;
    };
  }, [currentSectionIndex, sections, isTransitioningRef, screenHeight]);

  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <div
        ref={fullPageRef}
        className={classNames(["transition-transform duration-300 ease-in", className])}
        onTransitionEnd={() => {
          isTransitioningRef.current = false;
        }}
      >
        {sections.map((s, idx) => (
          <section key={idx} className="h-screen max-h-screen">
            {s}
          </section>
        ))}
      </div>
    </div>
  );
};
