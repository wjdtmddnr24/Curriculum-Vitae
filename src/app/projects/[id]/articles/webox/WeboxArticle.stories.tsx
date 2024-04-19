import { Meta, StoryObj } from "@storybook/react";

import WeboxArticle from "./WeboxArticle";
import ProjectLayout from "../../../layout";

const meta: Meta<typeof WeboxArticle> = {
  title: "article/Webox",
  component: WeboxArticle,
  decorators: (Story) => (
    <>
      <ProjectLayout>
        <Story />
      </ProjectLayout>
    </>
  ),
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof WeboxArticle>;

export const Default: Story = {};
