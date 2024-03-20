import { SectionInfo } from "../features/section-container/SectionContainer";
import { Awards } from "../features/sections/Awards";
import { Profile } from "../features/sections/Profile";
import { Projects } from "../features/sections/Projects";
import { TechSkills } from "../features/sections/TechSkills";

export const sections: SectionInfo[] = [
  {
    title: "Profile",
    Component: Profile,
  },
  {
    title: "Tech Skills",
    Component: TechSkills,
  },
  {
    title: "Projects",
    Component: Projects,
  },
  {
    title: "Awards",
    Component: Awards,
  },
];
