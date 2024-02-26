"use client";

import classNames from "classnames";
import { forwardRef, MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { useShallow } from "zustand/react/shallow";
import { useDebouncedScreenHeight, useScreenHeightRef } from "../../app/hooks/useScreenHeight";
import { sections } from "../../app/sections";
import NamedIndex from "../named-index/NamedIndex";
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

function getMovingDirection(y: number, screenHeight: number, targetSectionIndex: number): Direction {
  if (targetSectionIndex * -screenHeight === y) {
    return Direction.NONE;
  } else if (targetSectionIndex * -screenHeight > y) {
    return Direction.UP;
  } else {
    return Direction.DOWN;
  }
}

export const SectionContainer = () => {
  const screenHeightRef = useScreenHeightRef();
  const outerSectionContainerRef = useRef<HTMLDivElement>(null);
  const innerSectionContainerRef = useRef<HTMLDivElement>(null);
  const movingState = useSectionsStore((state) => state.movingState);
  const [currentSectionIndex, setCurrentSectionIndex, setMovingState] = useSectionsStore(
    useShallow((state) => [state.sectionIndex, state.setSectionIndex, state.setMovingState]),
  );
  const targetSectionIndexRef = useRef<number>(currentSectionIndex);
  const prevEventRef = useRef<WheelEvent | null>(null);

  useEffect(() => {
    if (!outerSectionContainerRef.current || !innerSectionContainerRef.current) return;

    const outerSectionContainerDiv = outerSectionContainerRef.current;
    const innerSectionContainerDiv = innerSectionContainerRef.current;

    const onWheel = (e: WheelEvent) => {
      const { y } = innerSectionContainerDiv.getBoundingClientRect();
      const wheelDirection: Direction = getWheelDirection(e);
      const movingDirection: Direction = getMovingDirection(y, screenHeightRef.current, targetSectionIndexRef.current);

      const nextCurrentSectionIndex = targetSectionIndexRef.current + wheelDirection;

      const deltaTime = e.timeStamp - (prevEventRef.current?.timeStamp ?? 0);
      const comparingEvent = prevEventRef.current;
      prevEventRef.current = e;

      // Check out of bounds
      if (nextCurrentSectionIndex >= sections.length || nextCurrentSectionIndex < 0) {
        return;
      }

      // Check if changing direction but goes more than 1 section(screen)
      if (
        movingDirection !== wheelDirection &&
        Math.abs(nextCurrentSectionIndex * -screenHeightRef.current - y) > screenHeightRef.current
      ) {
        return;
      }

      // Check if same direction but goes more than 1.1 section(screen)
      if (
        movingDirection === wheelDirection &&
        Math.abs(nextCurrentSectionIndex * -screenHeightRef.current - y) > screenHeightRef.current * 1.1
      ) {
        return;
      }

      if (
        deltaTime < 50 &&
        comparingEvent &&
        (comparingEvent.deltaY ^ e.deltaY) >= 0 &&
        Math.abs(comparingEvent.deltaY) >= Math.abs(e.deltaY)
      ) {
        return;
      }

      targetSectionIndexRef.current = nextCurrentSectionIndex;
      setMovingState(MovingState.MOVING);
    };

    outerSectionContainerDiv.addEventListener("wheel", onWheel);

    return () => outerSectionContainerDiv.removeEventListener("wheel", onWheel);
  }, [screenHeightRef, setCurrentSectionIndex, setMovingState]);

  return (
    <>
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
              <InnerSectionContainer
                ref={innerSectionContainerRef}
                addTransitionDuration={state !== "exited"}
                targetSectionIndex={targetSectionIndexRef.current}
              />
            );
          }}
        </Transition>
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2">
        <NamedIndex
          sectionIndex={currentSectionIndex}
          onSectionNameClick={(index) => {
            targetSectionIndexRef.current = index;
            setMovingState(MovingState.MOVING);
          }}
        />
      </div>
    </>
  );
};

interface InnerSectionContainerProps {
  targetSectionIndex: number;
  addTransitionDuration: boolean;
}

const InnerSectionContainer = forwardRef<HTMLDivElement, InnerSectionContainerProps>(function InnerSectionContainer(
  { addTransitionDuration, targetSectionIndex }: InnerSectionContainerProps,
  ref,
) {
  const screenHeight = useDebouncedScreenHeight(200);

  return (
    <div
      ref={ref}
      className={classNames(
        "transition-transform ease-in-out flex flex-col items-center justify-center",
        addTransitionDuration && "duration-700",
      )}
      style={{
        transform: `translateY(-${screenHeight * targetSectionIndex}px)`,
      }}
    >
      {sections.map(({ Component }, idx) => (
        <Section key={idx}>
          <Component />
        </Section>
      ))}
    </div>
  );
});
