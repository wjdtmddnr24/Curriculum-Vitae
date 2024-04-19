import { Meta, StoryObj } from "@storybook/react";

import CaptainHookArticle from "./CaptainHookArticle";
import ProjectLayout from "../../../layout";

const meta: Meta<typeof CaptainHookArticle> = {
  title: "article/CaptianHook",
  component: CaptainHookArticle,
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

type Story = StoryObj<typeof CaptainHookArticle>;

export const Default: Story = {};
