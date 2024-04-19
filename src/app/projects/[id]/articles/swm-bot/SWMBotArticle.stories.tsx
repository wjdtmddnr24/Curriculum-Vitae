import { Meta, StoryObj } from "@storybook/react";

import SWMBotArticle from "./SWMBotArticle";
import ProjectLayout from "../../../layout";

const meta: Meta<typeof SWMBotArticle> = {
  title: "article/SWMBot",
  component: SWMBotArticle,
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

type Story = StoryObj<typeof SWMBotArticle>;

export const Default: Story = {};
