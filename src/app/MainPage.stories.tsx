import { Meta, StoryObj } from "@storybook/react";

import GradientBackground from "@components/gradient-background/GradientBackground";
import { ToggleDarkmodeButton } from "@components/toggle-darkmode-button/ToggleDarkmodeButton";

import MainPage from "./page";
import { Providers } from "./providers";

const meta: Meta<typeof MainPage> = {
  title: "page/MainPage",
  component: MainPage as any,
  decorators: (Story) => (
    <>
      <div className="text-slate-700 dark:text-slate-300">
        <Providers>
          <GradientBackground />
          <Story />
          <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3 rounded-full">
            <ToggleDarkmodeButton />
          </div>
        </Providers>
      </div>
    </>
  ),
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Default: Story = {};
