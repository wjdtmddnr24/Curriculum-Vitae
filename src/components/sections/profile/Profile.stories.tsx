import { Meta, StoryObj } from "@storybook/react";

import { Profile } from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "sections/Profile",
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  render: () => <Profile />,
};
