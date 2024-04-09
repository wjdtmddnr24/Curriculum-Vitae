import { Meta, StoryObj } from "@storybook/react";
import { Awards } from "./Awards";

const meta: Meta<typeof Awards> = {
  component: Awards,
};

export default meta;

type Story = StoryObj<typeof Awards>;

export const Default: Story = {
  render: () => <Awards />,
};
