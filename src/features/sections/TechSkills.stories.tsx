import { Meta, StoryObj } from "@storybook/react";
import { TechSkills } from "./TechSkills";

const meta: Meta<typeof TechSkills> = {
  component: TechSkills,
};

export default meta;

type Story = StoryObj<typeof TechSkills>;

export const Default: Story = {
  render: () => <TechSkills />,
};
