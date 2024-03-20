import { ReactNode, useRef, useState, type WheelEvent } from "react";

interface AnotherSectionContainerProps {
  children: ReactNode;
}

const sectionCount = 4;

export const AnotherSectionContainer = ({ children }: AnotherSectionContainerProps) => {
  const [index, setIndex] = useState<number>(0);
  const prevWheelDirectionRef = useRef<number>(1);
  const timeStampRef = useRef<number>(0);
  const onWheel = (e: WheelEvent) => {
    const wheelDirection = e.deltaY > 0 ? 1 : -1;
    if (e.timeStamp - timeStampRef.current < 700 * 0.25) return;

    if (wheelDirection !== prevWheelDirectionRef.current) {
      setIndex((index) => Math.max(0, Math.min(index + wheelDirection, sectionCount - 1)));
      timeStampRef.current = e.timeStamp;
      prevWheelDirectionRef.current = wheelDirection;
    } else {
      if (e.timeStamp - timeStampRef.current > 700 * 0.5) {
        setIndex((index) => Math.max(0, Math.min(index + wheelDirection, sectionCount - 1)));
        timeStampRef.current = e.timeStamp;
      }
    }
  };

  return (
    <div className="h-screen overflow-hidden" onWheel={onWheel}>
      <div
        className="transition-transform ease-in-out duration-700"
        style={{ transform: `translateY(${index * -100}vh)` }}
      >
        {children}
      </div>
    </div>
  );
};

interface SectionProps {
  children: ReactNode;
}

export const AnotherSection = ({ children }: SectionProps) => {
  return <section className="h-screen flex items-center justify-center">{children}</section>;
};
