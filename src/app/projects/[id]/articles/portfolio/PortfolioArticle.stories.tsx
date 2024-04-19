import { Meta, StoryObj } from "@storybook/react";

import PortfolioArticle from "./PortfolioArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof PortfolioArticle> = {
  title: "article/Portfolio",
  component: PortfolioArticle,
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

type Story = StoryObj<typeof PortfolioArticle>;

export const Default: Story = {};
