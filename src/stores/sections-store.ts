import { create, createStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum MovingState {
  IDLE = "IDLE",
  MOVING = "MOVING",
}

export type SectionsState = {
  sectionIndex: number;
  movingState: MovingState;
};

export type SectionsActions = {
  setSectionIndex: (index: number) => void;
  setMovingState: (state: MovingState) => void;
};

export type SectionsStore = SectionsState & SectionsActions;

const defaultInitialState: SectionsState = {
  sectionIndex: 0,
  movingState: MovingState.IDLE,
};

export const createSectionsStore = (initState: SectionsState = defaultInitialState) => {
  return createStore<SectionsStore>()(
    immer((set) => ({
      ...initState,
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
};
