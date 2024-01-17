"use client";

import { useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { useShallow } from "zustand/react/shallow";
import { useScreenHeight } from "../../app/hooks/useScreenHeight";
import { sections } from "../../app/sections";
import Section from "./Section";
import { MovingState, useSectionsStore } from "./useSectionsStore";

enum Direction {
  UP = -1,
  DOWN = 1,
  NONE = 0,
}

function getWheelDirection(e: WheelEvent): Direction {
  if (e.deltaY > 0) {
    return Direction.DOWN;
  } else if (e.deltaY < 0) {
    return Direction.UP;
  } else {
    return Direction.NONE;
  }
}

export const SectionContainer = () => {
  const screenHeight = useScreenHeight();
  const outerSectionContainerRef = useRef<HTMLDivElement>(null);
  const innerSectionContainerRef = useRef<HTMLDivElement>(null);
  const movingState = useSectionsStore((state) => state.movingState);
  const [currentSectionIndex, setCurrentSectionIndex, setMovingState] = useSectionsStore(
    useShallow((state) => [state.sectionIndex, state.setSectionIndex, state.setMovingState])
  );
  const targetSectionIndexRef = useRef<number>(currentSectionIndex);

  useEffect(() => {
    if (!outerSectionContainerRef.current || !innerSectionContainerRef.current) return;

    const outerSectionContainerDiv = outerSectionContainerRef.current;
    const innerSectionContainerDiv = innerSectionContainerRef.current;

    const onWheel = (e: WheelEvent) => {
      const { y } = innerSectionContainerDiv.getBoundingClientRect();
      const wheelDirection: Direction = getWheelDirection(e);
      const movingDirection: Direction =
        targetSectionIndexRef.current * -screenHeight === y
          ? Direction.NONE
          : targetSectionIndexRef.current * -screenHeight > y
          ? Direction.UP
          : Direction.DOWN;

      const nextCurrentSectionIndex = targetSectionIndexRef.current + wheelDirection;

      if (nextCurrentSectionIndex >= sections.length || nextCurrentSectionIndex < 0) {
        return;
      }

      if (movingDirection !== wheelDirection && Math.abs(nextCurrentSectionIndex * -screenHeight - y) > screenHeight) {
        return;
      }

      if (
        movingDirection === wheelDirection &&
        Math.abs(nextCurrentSectionIndex * -screenHeight - y) > screenHeight * 1.1
      ) {
        return;
      }

      setMovingState(MovingState.MOVING);

      targetSectionIndexRef.current = nextCurrentSectionIndex;
    };

    outerSectionContainerDiv.addEventListener("wheel", onWheel);

    return () => outerSectionContainerDiv.removeEventListener("wheel", onWheel);
  }, [currentSectionIndex, screenHeight, setCurrentSectionIndex, setMovingState]);

  return (
    <div className="h-screen max-h-screen relative overflow-hidden" ref={outerSectionContainerRef}>
      <Transition
        in={movingState !== MovingState.IDLE}
        nodeRef={innerSectionContainerRef}
        timeout={350}
        onEntered={() => {
          setMovingState(MovingState.IDLE);
          setCurrentSectionIndex(targetSectionIndexRef.current);
        }}
      >
        {(state) => {
          return (
            <div
              ref={innerSectionContainerRef}
              className="transition-transform duration-700 ease-in-out flex flex-col items-center justify-center"
              style={{
                transform: `translateY(-${screenHeight * targetSectionIndexRef.current}px)`,
              }}
            >
              {sections.map(({ Component }, idx) => (
                <Section key={idx}>
                  <Component />
                </Section>
              ))}
            </div>
          );
        }}
      </Transition>
    </div>
  );
};
