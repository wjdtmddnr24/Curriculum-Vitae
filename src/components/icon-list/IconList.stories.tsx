import { faBaby, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";

import { IconList } from "./IconList";

const meta: Meta<typeof IconList> = {
  component: IconList,
};

export default meta;

type Story = StoryObj<typeof IconList>;

export const Default: Story = {
  render: () => (
    <IconList className="text-slate-700 dark:text-slate-200">
      <IconList.Item icon={faTimes}>Item 1</IconList.Item>
      <IconList.Item icon={faBaby}>Item 2</IconList.Item>
    </IconList>
  ),
};
