import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum MovingState {
  IDLE = "IDLE",
  MOVING = "MOVING",
}

interface SectionsState {
  sectionIndex: number;
  setSectionIndex: (index: number) => void;
  movingState: MovingState;
  setMovingState: (state: MovingState) => void;
}

export const useSectionsStore = create<SectionsState>()(
  immer((set) => ({
    sectionIndex: 0,
    movingState: MovingState.IDLE,
    setSectionIndex: (index) =>
      set((state) => {
        state.sectionIndex = index;
      }),
    setMovingState: (movingState) =>
      set((state) => {
        state.movingState = movingState;
      }),
  }))
);
