"use client";

import { ReactNode, createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";

import { SectionsState, SectionsStore, createSectionsStore } from "./sections-store";

export const SectionsStoreContext = createContext<StoreApi<SectionsStore> | null>(null);

export interface SedtionsStoreProviderProps {
  children: ReactNode;
  initialState?: SectionsState;
}

export const SectionsStoreProvider = ({ children, initialState }: SedtionsStoreProviderProps) => {
  const storeRef = useRef<StoreApi<SectionsStore>>();
  if (!storeRef.current) {
    storeRef.current = createSectionsStore(initialState);
  }

  return <SectionsStoreContext.Provider value={storeRef.current}>{children}</SectionsStoreContext.Provider>;
};

export const useSectionsStore = <T,>(selector: (store: SectionsStore) => T): T => {
  const sectionsStoreContext = useContext(SectionsStoreContext);

  if (!sectionsStoreContext) {
    throw new Error("useSectionsStore must be used within a SectionsStoreProvider");
  }
  return useStore(sectionsStoreContext, selector);
};
