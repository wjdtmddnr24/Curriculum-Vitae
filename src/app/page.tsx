import { Viewport } from "next";
import { SectionContainer, SectionInfo } from "@/components/section-container/SectionContainer";
import { Awards } from "@/components/sections/awards/Awards";
import { Profile } from "@/components/sections/profile/Profile";
import { Projects } from "@/components/sections/projects/Projects";
import { TechSkills } from "@/components/sections/tech-skills/TechSkills";
import { ToggleDarkmodeButton } from "@/components/toggle-darkmode-button/ToggleDarkmodeButton";

export const metadata = {
  title: "Curriculum Vitae",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const sections: SectionInfo[] = [
  {
    title: "Profile",
    Component: <Profile />,
    hash: "",
  },
  {
    title: "Tech Skills",
    Component: <TechSkills />,
    hash: "#Tech Skills",
  },
  {
    title: "Projects",
    Component: <Projects />,
    hash: "#Projects",
  },
  {
    title: "Awards",
    Component: <Awards />,
    hash: "#Awards",
  },
];

export default async function MainPage() {
  return (
    <>
      <SectionContainer sections={sections} />
      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3 rounded-full">
        <ToggleDarkmodeButton />
      </div>
    </>
  );
}
