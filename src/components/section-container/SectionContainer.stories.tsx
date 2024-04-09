import { Meta, StoryObj } from "@storybook/react";
import { Awards } from "../../features/sections/awards/Awards";
import { Profile } from "../../features/sections/profile/Profile";
import { Projects } from "../../features/sections/projects/Projects";
import { TechSkills } from "../../features/sections/tech-skills/TechSkills";
import { SectionsStoreProvider } from "../../stores/sections-store-provider";
import { SectionContainer, SectionInfo } from "./SectionContainer";

const meta: Meta<typeof SectionContainer> = {
  component: SectionContainer,
};

export default meta;

type Story = StoryObj<typeof SectionContainer>;

const sections: SectionInfo[] = [
  {
    title: "Profile",
    Component: <Profile />,
    hash: "",
  },
  {
    title: "Tech Skills",
    Component: <TechSkills />,
    hash: "",
  },
  {
    title: "Projects",
    Component: <Projects />,
    hash: "",
  },
  {
    title: "Awards",
    Component: <Awards />,
    hash: "",
  },
];

export const Default: Story = {
  decorators: (Story) => {
    return (
      <SectionsStoreProvider>
        <Story />
      </SectionsStoreProvider>
    );
  },
  parameters: { layout: "fullscreen" },
  render: () => (
    <>
      <SectionContainer sections={sections} />
    </>
  ),
};
