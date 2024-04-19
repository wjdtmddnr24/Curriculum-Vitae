import { Meta, StoryObj } from "@storybook/react";

import SWMBotArticle from "./SWMBotArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof SWMBotArticle> = {
  title: "article/SWMBot",
  component: SWMBotArticle,
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

type Story = StoryObj<typeof SWMBotArticle>;

export const Default: Story = {};
