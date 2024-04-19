import { Meta, StoryObj } from "@storybook/react";

import PortfolioArticle from "./PortfolioArticle";
import ProjectLayout from "../../../layout";

const meta: Meta<typeof PortfolioArticle> = {
  title: "article/Portfolio",
  component: PortfolioArticle,
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

type Story = StoryObj<typeof PortfolioArticle>;

export const Default: Story = {};
