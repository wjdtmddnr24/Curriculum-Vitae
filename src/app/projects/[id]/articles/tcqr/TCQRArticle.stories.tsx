import { Meta, StoryObj } from "@storybook/react";

import TCQRArticle from "./TCQRArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof TCQRArticle> = {
  title: "projects/article/TCQR",
  component: TCQRArticle,
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

type Story = StoryObj<typeof TCQRArticle>;

export const Default: Story = {};
