import type { Meta, StoryObj } from "@storybook/react";
import portfolioPic from "../../../public/portfolio_combined_compressed.png";
import GallaryItem from "./GallaryItem";

const meta: Meta<typeof GallaryItem> = {
  component: GallaryItem,
  decorators: (Story) => (
    <div className="bg-white dark:bg-slate-800 w-[19rem]">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof GallaryItem>;

export const Primary: Story = {
  args: {
    title: "Portfolio",
    description: "포트폴리오 웹페이지",
    year: 2023,
    techs: ["React", "Nextjs", "TypeScript", "Tailwind CSS"],
    imageURL: portfolioPic,
    sourceURL: "#",
  },
};
