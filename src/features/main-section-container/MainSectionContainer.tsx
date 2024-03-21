"use client";

import dynamic from "next/dynamic";
import { type SectionInfo } from "../../components/section-container/SectionContainer";
import { Awards } from "../sections/Awards";
import { Profile } from "../sections/Profile";
import { Projects } from "../sections/Projects";
import { TechSkills } from "../sections/TechSkills";

const SectionContainer = dynamic(
  () => import("../../components/section-container/SectionContainer").then(({ SectionContainer }) => SectionContainer),
  { ssr: false }
);

const sections: SectionInfo[] = [
  {
    title: "Profile",
    Component: <Profile />,
  },
  {
    title: "Tech Skills",
    Component: <TechSkills />,
  },
  {
    title: "Projects",
    Component: <Projects />,
  },
  {
    title: "Awards",
    Component: <Awards />,
  },
];

const MainSectionContainer = () => {
  return <SectionContainer sections={sections} />;
};

export default MainSectionContainer;
