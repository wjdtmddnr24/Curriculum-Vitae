import { Meta, StoryObj } from "@storybook/react";

import AirforceArticle from "./AirforceArticle";
import ProjectsLayout from "../../../layout";

const meta: Meta<typeof AirforceArticle> = {
  title: "careers/article/Airforce",
  component: AirforceArticle,
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

type Story = StoryObj<typeof AirforceArticle>;

export const Default: Story = {};
