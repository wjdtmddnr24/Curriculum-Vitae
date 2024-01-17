import { Awards } from "../features/sections/Awards";
import { Profile } from "../features/sections/Profile";
import { Projects } from "../features/sections/Projects";
import { TechSkills } from "../features/sections/TechSkills";

interface Section {
  title: string;
  Component: React.ComponentType;
}

export const sections: Section[] = [
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
