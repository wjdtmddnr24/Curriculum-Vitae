"use client";

import { SectionContainer, type SectionInfo } from "../../components/section-container/SectionContainer";
import { Awards } from "../sections/Awards";
import { Profile } from "../sections/Profile";
import { Projects } from "../sections/Projects";
import { TechSkills } from "../sections/TechSkills";

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

const MainSectionContainer = () => {
  return <SectionContainer sections={sections} />;
};

export default MainSectionContainer;
