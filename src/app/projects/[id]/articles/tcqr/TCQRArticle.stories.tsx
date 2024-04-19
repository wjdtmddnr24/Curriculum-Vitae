import { Meta, StoryObj } from "@storybook/react";

import TCQRArticle from "./TCQRArticle";
import ProjectLayout from "../../../layout";

const meta: Meta<typeof TCQRArticle> = {
  title: "article/TCQR",
  component: TCQRArticle,
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

type Story = StoryObj<typeof TCQRArticle>;

export const Default: Story = {};
