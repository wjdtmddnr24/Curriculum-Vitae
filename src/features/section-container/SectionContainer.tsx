"use client";

import { useRef, type WheelEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { useSectionsStore } from "../../stores/sections-store-provider";
import NamedIndex from "../named-index/NamedIndex";
import { Section } from "./Section";

export interface SectionInfo {
  title: string;
  Component: React.ComponentType;
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

  const onWheel = (e: WheelEvent) => {
    const wheelDirection = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;

    if (wheelDirection !== prevAppliedWheelDirectionRef.current) {
      if (e.timeStamp - timeStampRef.current >= 700 * 0.25) {
        setCurrentSectionIndex(Math.max(0, Math.min(currentSectionIndex + wheelDirection, sections.length - 1)));
        timeStampRef.current = e.timeStamp;
        prevAppliedWheelDirectionRef.current = wheelDirection;
      }
    } else {
      const deltaTime = e.timeStamp - (latestWheelEventRef?.current?.timeStamp ?? 0);

      if (
        !(
          latestWheelEventRef.current &&
          deltaTime < 50 &&
          Math.abs(latestWheelEventRef.current.deltaY) >= Math.abs(e.deltaY)
        ) &&
        e.timeStamp - timeStampRef.current > 700 * 0.5
      ) {
        setCurrentSectionIndex(Math.max(0, Math.min(currentSectionIndex + wheelDirection, sections.length - 1)));
        timeStampRef.current = e.timeStamp;
      }
    }

    latestWheelEventRef.current = e;
  };

  return (
    <>
      <div className="h-screen overflow-hidden" onWheel={onWheel}>
        <div
          className="transition-transform ease-in-out duration-700"
          style={{ transform: `translateY(${currentSectionIndex * -100}vh)` }}
        >
          {sections.map(({ Component }, idx) => (
            <Section key={idx}>
              <Component />
            </Section>
          ))}
        </div>
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2">
        <NamedIndex
          sections={sections}
          currentIndex={currentSectionIndex}
          onSectionNameClick={setCurrentSectionIndex}
        />
      </div>
    </>
  );
};
