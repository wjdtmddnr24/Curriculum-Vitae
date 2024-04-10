import { Meta, StoryObj } from "@storybook/react";

import TitledList from "./TitledList";

const meta: Meta<typeof TitledList> = {
  component: TitledList,
};

export default meta;

type Story = StoryObj<typeof TitledList>;

export const Default: Story = {
  render: () => (
    <TitledList>
      <TitledList.Title>Title</TitledList.Title>
      <TitledList.List>
        <TitledList.Item>Item 1</TitledList.Item>
        <TitledList.Item>Item 2</TitledList.Item>
        <TitledList.Item>Item 3</TitledList.Item>
      </TitledList.List>
    </TitledList>
  ),
};
