import { Meta, StoryObj } from "@storybook/react";

import CamtactArticle from "./CamtactArticle";
import ProjectLayout from "../../../layout";

const meta: Meta<typeof CamtactArticle> = {
  title: "article/Camtact",
  component: CamtactArticle,
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

type Story = StoryObj<typeof CamtactArticle>;

export const Default: Story = {};
