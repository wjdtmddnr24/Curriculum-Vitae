import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";
import { pretendardFont } from "../src/fonts";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div style={pretendardFont.style}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
