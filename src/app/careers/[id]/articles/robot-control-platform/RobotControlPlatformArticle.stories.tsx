import { Meta, StoryObj } from "@storybook/react";

import RobotControlPlatformArticle from "./RobotControlPlatformArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof RobotControlPlatformArticle> = {
  title: "article/RobotControlPlatform",
  component: RobotControlPlatformArticle,
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

type Story = StoryObj<typeof RobotControlPlatformArticle>;

export const Default: Story = {};
