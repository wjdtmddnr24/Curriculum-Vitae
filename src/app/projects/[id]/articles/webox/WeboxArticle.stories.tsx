import { Meta, StoryObj } from "@storybook/react";

import WeboxArticle from "./WeboxArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof WeboxArticle> = {
  title: "projects/article/Webox",
  component: WeboxArticle,
  decorators: (Story) => (
    <>
      <ProjectsLayout>
        <Story />
      </ProjectsLayout>
    </>
  ),
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof WeboxArticle>;

export const Default: Story = {};
