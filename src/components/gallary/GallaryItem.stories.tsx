import type { Meta, StoryObj } from "@storybook/react";
import portfolioPic from "@public/portfolio_combined_compressed.png";
import GallaryItem from "./GallaryItem";

const meta: Meta<typeof GallaryItem> = {
  component: GallaryItem,
  decorators: (Story) => (
    <div className="w-[19rem] grid">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof GallaryItem>;

export const Default: Story = {
  args: {
    title: "Portfolio",
    description: "포트폴리오 웹페이지",
    thumbnailURL: portfolioPic,
    href: "#",
  },
};

export const NoThumbnail: Story = {
  args: {
    title: "Portfolio",
    description: "포트폴리오 웹페이지",
    thumbnailURL: undefined,
    href: "#",
  },
};
