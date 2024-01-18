import { Viewport } from "next";
import NamedIndex from "../features/named-index/NamedIndex";
import { SectionContainer } from "../features/section-container/SectionContainer";
import { ToggleDarkmodeButton } from "../features/toggle-darkmode-button/ToggleDarkmodeButton";
import { ScrollDownIndicator } from "./components/scroll-down-indicator/ScrollDownIndicator";

export const metadata = {
  title: "Curriculum Vitae",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function MainPage() {
  return (
    <>
      <SectionContainer />

      <div className="fixed bottom-8 right-8 flex flex-col gap-3 rounded-full">
        <ToggleDarkmodeButton />
      </div>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 pointer-events-none">
        <ScrollDownIndicator />
      </div>
    </>
  );
}
