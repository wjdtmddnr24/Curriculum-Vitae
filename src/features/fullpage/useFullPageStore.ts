import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SectionMetadata {
  index: number;
  title: string;
}

interface FullPageState {
  metadatas: SectionMetadata[];
  pageIndex: number;
  setPageIndex: (index: number) => void;
  setMetadata: (metadata: SectionMetadata) => void;
}

export const useFullPageStore = create<FullPageState>()(
  immer((set) => ({
    pageIndex: 0,
    metadatas: [],
    setMetadata: (metadata) =>
      set((state) => {
        state.metadatas[metadata.index] = metadata;
      }),
    setPageIndex: (index) =>
      set((state) => {
        state.pageIndex = index;
      }),
  })),
);
