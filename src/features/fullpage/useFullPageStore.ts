import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface FullPageState {
  pageIndex: number;
  pageNames: string[];
  setPageIndex: (index: number) => void;
  addPageName: (name: string) => void;
  removePageName: (name: string) => void;
}

export const useFullPageStore = create<FullPageState>()(
  immer((set) => ({
    pageIndex: 0,
    setPageIndex: (index) =>
      set((state) => {
        state.pageIndex = index;
      }),
    pageNames: [],
    addPageName: (name) =>
      set((state) => {
        state.pageNames.push(name);
      }),
    removePageName: (name) =>
      set((state) => {
        state.pageNames = state.pageNames.filter((n) => n !== name);
      }),
  })),
);
