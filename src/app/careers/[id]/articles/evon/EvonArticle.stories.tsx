import { Meta, StoryObj } from "@storybook/react";

import EvonArticle from "./EvonArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof EvonArticle> = {
  title: "article/Evon",
  component: EvonArticle,
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

type Story = StoryObj<typeof EvonArticle>;

export const Default: Story = {};
