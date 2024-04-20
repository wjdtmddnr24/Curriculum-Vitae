import { Meta, StoryObj } from "@storybook/react";

import AcademyTeacherArticle from "./AcademyTeacherArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof AcademyTeacherArticle> = {
  title: "article/AcademyTeacher",
  component: AcademyTeacherArticle,
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

type Story = StoryObj<typeof AcademyTeacherArticle>;

export const Default: Story = {};
