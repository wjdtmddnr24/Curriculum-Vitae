import classNames from "classnames";
import { createContext, ReactNode, RefObject, useCallback, useContext, useEffect, useRef, useState } from "react";

interface FullPageProps {
  className?: string;
  children: ReactNode;
}

const fullPageContext = createContext<((info: RefObject<HTMLElement>) => void) | null>(null);

export const FullPage = ({ className, children }: FullPageProps) => {
  const fullPageRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isTransitioningRef.current) return;
      if (e.deltaY > 0 && currentSectionIndex >= sectionRefs.length - 1) {
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
  }, [currentSectionIndex, sectionRefs, isTransitioningRef]);

  useEffect(() => {
    const offset = sectionRefs
      .filter((_, idx) => idx < currentSectionIndex)
      .reduce((acc, ref) => acc + (ref.current?.clientHeight ?? 0), 0);

    if (fullPageRef.current?.style) {
      isTransitioningRef.current = true;
      fullPageRef.current.style.transform = `translateY(-${offset}px)`;
    }

    return () => {
      isTransitioningRef.current = false;
    };
  }, [currentSectionIndex, sectionRefs, isTransitioningRef]);

  const addSectionRef = useCallback(
    (ref: RefObject<HTMLElement>) => {
      setSectionRefs((refs) => {
        const nextRefs = refs.filter((r) => r.current);
        if (ref.current !== null && nextRefs.find((r) => r.current === ref.current)) {
          return nextRefs;
        }
        return [...nextRefs, ref];
      });
    },
    [setSectionRefs],
  );
  return (
    <fullPageContext.Provider value={addSectionRef}>
      <div className="h-screen max-h-screen overflow-hidden">
        <div
          ref={fullPageRef}
          className={classNames(["transition-transform duration-300 ease-in", className])}
          onTransitionEnd={(e) => {
            isTransitioningRef.current = false;
          }}
        >
          {children}
        </div>
      </div>
    </fullPageContext.Provider>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const addSectionRef = useContext(fullPageContext);

  useEffect(() => {
    addSectionRef?.(ref);
  }, [ref, addSectionRef]);

  return (
    <section ref={ref} className={classNames(["h-screen max-h-screen", className])}>
      {children}
    </section>
  );
};

FullPage.Section = Section;
