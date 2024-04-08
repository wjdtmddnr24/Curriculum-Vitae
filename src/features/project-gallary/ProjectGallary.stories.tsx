import type { Meta, StoryObj } from "@storybook/react";
import ProjectGallary from "./ProjectGallary";

const meta: Meta<typeof ProjectGallary> = {
  component: ProjectGallary,
};

export default meta;
type Story = StoryObj<typeof ProjectGallary>;

export const Primary: Story = {
  render: () => <ProjectGallary />,
};
