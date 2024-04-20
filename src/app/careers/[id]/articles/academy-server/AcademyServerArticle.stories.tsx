import { Meta, StoryObj } from "@storybook/react";

import AcademyServerArticle from "./AcademyServerArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof AcademyServerArticle> = {
  title: "article/AcademyServer",
  component: AcademyServerArticle,
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

type Story = StoryObj<typeof AcademyServerArticle>;

export const Default: Story = {};
