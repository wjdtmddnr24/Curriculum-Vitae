"use client";

import { SectionContainer, type SectionInfo } from "../../components/section-container/SectionContainer";
import { Awards } from "../sections/awards/Awards";
import { Profile } from "../sections/profile/Profile";
import { Projects } from "../sections/projects/Projects";
import { TechSkills } from "../sections/tech-skills/TechSkills";

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
