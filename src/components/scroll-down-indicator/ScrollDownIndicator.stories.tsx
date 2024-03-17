import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { MovingState } from "../../stores/sections-store";
import { SectionsStoreProvider, useSectionsStore } from "../../stores/sections-store-provider";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

const meta: Meta<typeof ScrollDownIndicator> = {
  component: ScrollDownIndicator,
  tags: ["autodocs"],
  args: {
    index: 0,
  },
  argTypes: {
    index: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollDownIndicator>;

const SecitonIndexChanger = ({ index }: { index: number }) => {
  const setSectionIndex = useSectionsStore((state) => state.setSectionIndex);
  useEffect(() => {
    if (index === undefined) return;
    setSectionIndex(index);
  }, [index, setSectionIndex]);
  return null;
};

export const Default: Story = {
  decorators: (Story, { args }) => {
    return (
      <SectionsStoreProvider>
        <SecitonIndexChanger index={(args as any).index} />
        <Story />
      </SectionsStoreProvider>
    );
  },

  render: () => <ScrollDownIndicator />,
};

export const NotFirstSection: Story = {
  decorators: (Story) => (
    <SectionsStoreProvider initialState={{ sectionIndex: 1, movingState: MovingState.IDLE }}>
      <Story />
    </SectionsStoreProvider>
  ),
  render: () => <ScrollDownIndicator></ScrollDownIndicator>,
};
