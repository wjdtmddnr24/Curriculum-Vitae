import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export type SectionsState = {
  sectionIndex: number;
};

export type SectionsActions = {
  setSectionIndex: (index: number) => void;
};

export type SectionsStore = SectionsState & SectionsActions;

const defaultInitialState: SectionsState = {
  sectionIndex: 0,
};

export const createSectionsStore = (initState: SectionsState = defaultInitialState) => {
  return createStore<SectionsStore>()(
    immer((set) => ({
      ...initState,
      setSectionIndex: (index) =>
        set((state) => {
          state.sectionIndex = index;
        }),
    }))
  );
};
