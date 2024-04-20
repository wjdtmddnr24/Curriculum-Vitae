import { Meta, StoryObj } from "@storybook/react";

import CaptainHookArticle from "./CaptainHookArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof CaptainHookArticle> = {
  title: "projects/article/CaptianHook",
  component: CaptainHookArticle,
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

type Story = StoryObj<typeof CaptainHookArticle>;

export const Default: Story = {};
