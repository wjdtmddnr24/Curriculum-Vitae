import { Meta, StoryObj } from "@storybook/react";

import PageCard from "./PageCard";

const meta: Meta<typeof PageCard> = {
  component: PageCard,
};

export default meta;

type Story = StoryObj<typeof PageCard>;

export const Default: Story = {};
