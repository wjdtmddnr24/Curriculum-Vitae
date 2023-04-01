import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface FullPageState {
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

export const useFullPageStore = create<FullPageState>()(
  immer((set) => ({
    pageIndex: 0,
    setPageIndex: (index) =>
      set((state) => {
        state.pageIndex = index;
      }),
  })),
);
