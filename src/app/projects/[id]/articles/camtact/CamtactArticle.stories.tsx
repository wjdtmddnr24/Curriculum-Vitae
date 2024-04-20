import { Meta, StoryObj } from "@storybook/react";

import CamtactArticle from "./CamtactArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof CamtactArticle> = {
  title: "projects/article/Camtact",
  component: CamtactArticle,
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

type Story = StoryObj<typeof CamtactArticle>;

export const Default: Story = {};
