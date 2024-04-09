"use client";

import { useRouter } from "next/navigation";
import { Fragment, ReactNode, useEffect, useRef, type WheelEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { MobileWidthThreshold, useWindowWidth } from "../../hooks/useWindowWidth";
import { useSectionsStore } from "../../stores/sections-store-provider";
import NamedIndex from "../named-index/NamedIndex";
import { ScrollDownIndicator } from "../scroll-down-indicator/ScrollDownIndicator";

export interface SectionInfo {
  title: string;
  Component: ReactNode;
  hash: string;
}

interface SectionContainerProps {
  sections: SectionInfo[];
}

export const SectionContainer = ({ sections }: SectionContainerProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useSectionsStore(
    useShallow((state) => [state.sectionIndex, state.setSectionIndex])
  );
  const prevAppliedWheelDirectionRef = useRef<number>(1);
  const timeStampRef = useRef<number>(0);
  const latestWheelEventRef = useRef<WheelEvent | null>(null);
  const windowWidth = useWindowWidth();
  const router = useRouter();

  const isClient = windowWidth !== undefined;
  const isMobile = isClient && windowWidth < MobileWidthThreshold;

  const changeSectionIndex = (index: number) => {
    setCurrentSectionIndex(index);
    const nextHash = sections[index].hash;
    router.replace(`${nextHash}`, { scroll: false });
  };

  useEffect(() => {
    const hash = decodeURI(window.location.hash);
    if (hash) {
      const sectionIndex = sections.findIndex(({ title }) => title === hash.slice(1));
      if (sectionIndex !== -1) {
        setCurrentSectionIndex(sectionIndex);
      }
    }
  }, [sections, setCurrentSectionIndex]);

  const onWheel = (e: WheelEvent) => {
    const wheelDirection = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
    const deltaTime = e.timeStamp - (latestWheelEventRef?.current?.timeStamp ?? 0);

    // Different wheel direction
    if (wheelDirection !== prevAppliedWheelDirectionRef.current) {
      if (e.timeStamp - timeStampRef.current >= 700 * 0.25) {
        const nextIndex = Math.max(0, Math.min(currentSectionIndex + wheelDirection, sections.length - 1));
        changeSectionIndex(nextIndex);
        timeStampRef.current = e.timeStamp;
        prevAppliedWheelDirectionRef.current = wheelDirection;
      }
    } else {
      const deltaTime = e.timeStamp - (latestWheelEventRef?.current?.timeStamp ?? 0);

      if (
        !(
          latestWheelEventRef.current &&
          deltaTime < 50 &&
          // 가장 마지막 deltaY가 현재 deltaY보다 크거나 같을 때
          Math.abs(latestWheelEventRef.current.deltaY) >= Math.abs(e.deltaY)
        ) &&
        e.timeStamp - timeStampRef.current > 700 * 0.5
      ) {
        const nextIndex = Math.max(0, Math.min(currentSectionIndex + wheelDirection, sections.length - 1));
        changeSectionIndex(nextIndex);
        timeStampRef.current = e.timeStamp;
      }
    }

    latestWheelEventRef.current = e;
  };

  if (!isClient) return null;

  return (
    <>
      {isMobile ? (
        <div>
          {sections.map(({ Component, title }) => (
            <Fragment key={title}>{Component}</Fragment>
          ))}
        </div>
      ) : (
        <>
          <div className="h-screen overflow-hidden" onWheel={onWheel}>
            <div
              className="transition-transform ease-in-out duration-700"
              style={{ transform: `translateY(${currentSectionIndex * -100}vh)` }}
            >
              {sections.map(({ Component, title }) => (
                <div key={title} className="h-screen flex items-center justify-center">
                  {Component}
                </div>
              ))}
            </div>
          </div>
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <ScrollDownIndicator />
          </div>
        </>
      )}
      <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2">
        <NamedIndex sections={sections} currentIndex={currentSectionIndex} onSectionNameClick={changeSectionIndex} />
      </div>
    </>
  );
};
