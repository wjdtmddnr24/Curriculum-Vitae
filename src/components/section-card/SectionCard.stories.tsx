import { Meta, StoryObj } from "@storybook/react";
import SectionCard from "./SectionCard";

const meta: Meta<typeof SectionCard> = {
  component: SectionCard,
};

export default meta;

type Story = StoryObj<typeof SectionCard>;

export const Default: Story = {
  render: () => <SectionCard className="p-4">Card</SectionCard>,
};
