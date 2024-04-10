"use client";

import { ThemeProvider } from "next-themes";

import { SectionsStoreProvider } from "../stores/sections-store-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <SectionsStoreProvider>{children}</SectionsStoreProvider>
    </ThemeProvider>
  );
}
