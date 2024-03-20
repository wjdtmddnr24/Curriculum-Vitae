"use client";

import { SectionContainer, SectionInfo } from "../../components/section-container/SectionContainer";
import { Awards } from "../sections/Awards";
import { Profile } from "../sections/Profile";
import { Projects } from "../sections/Projects";
import { TechSkills } from "../sections/TechSkills";

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
