import { Meta, StoryObj } from "@storybook/react";
import { SectionsStoreProvider } from "../../stores/sections-store-provider";
import { SectionContainer } from "./SectionContainer";

const meta: Meta<typeof SectionContainer> = {
  component: SectionContainer,
};

export default meta;

type Story = StoryObj<typeof SectionContainer>;

export const Default: Story = {
  decorators: (Story) => {
    return (
      <SectionsStoreProvider>
        <Story />
      </SectionsStoreProvider>
    );
  },
  parameters: { layout: "fullscreen" },
  render: () => <SectionContainer></SectionContainer>,
};
