import { Meta, StoryObj } from "@storybook/react";

import CareerCard from "./CareerCard";

const meta: Meta<typeof CareerCard> = {
  component: CareerCard,
  decorators: (Story) => (
    <div className="w-[64rem]">
      <div className="grid md:grid-cols-2 gap-4">
        <Story />
      </div>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof CareerCard>;

export const Default: Story = {
  args: {
    time: "2023.11 ~ 2023.01 (3개월)",
    title: "로봇 관제 플랫폼 설계 및 개발",
    techs: ["Kubernetes", "Next.js"],
    tags: ["프리랜서", "개인"],
  },
};
