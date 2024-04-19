import { Meta, StoryObj } from "@storybook/react";

import { Careers } from "./Careers";

const meta: Meta<typeof Careers> = {
  title: "sections/Careers",
  component: Careers,
};

export default meta;

type Story = StoryObj<typeof Careers>;

export const Default: Story = {
  render: () => <Careers />,
};
