import { Viewport } from "next";
import { Awards } from "../features/Awards";
import { FloatingActionButtons } from "../features/floating-action-buttons/FloatingActionButtons";
import { FullPage } from "../features/fullpage/FullPage";
import Section from "../features/fullpage/Section";
import NamedFullPageIndex from "../features/named-fullpage-index/NamedFullPageIndex";
import { Profile } from "../features/profile/Profile";
import { Projects } from "../features/projects/Projects";
import { ScrollDownIndicator } from "../features/scroll-down-indicator/ScrollDownIndicator";
import { TechSkills } from "../features/tech-skills/TechSkills";

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
      <FullPage
        sections={[
          <Section key="0" index={0} title="Main" className="relative">
            <Profile />
            <div className="absolute bottom-5">
              <ScrollDownIndicator />
            </div>
          </Section>,
          <Section key="1" index={1} title="Tech Skills">
            <TechSkills />
          </Section>,
          <Section key="2" index={2} title="Projects">
            <Projects />
          </Section>,
          <Section key="3" index={3} title="Awards">
            <Awards />
          </Section>,
        ]}
      />
      <div className="fixed right-8 top-1/2 -translate-y-1/2">
        <NamedFullPageIndex />
      </div>
      <FloatingActionButtons />
    </>
  );
}
