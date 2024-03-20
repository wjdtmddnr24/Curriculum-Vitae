import { Meta, StoryObj } from "@storybook/react";
import { sections } from "../../app/sections";
import Card from "../../components/card/Card";
import { SectionsStoreProvider } from "../../stores/sections-store-provider";
import { AnotherSection, AnotherSectionContainer } from "./AnotherSectionContainer";

const meta: Meta<typeof AnotherSectionContainer> = {
  component: AnotherSectionContainer,
};

export default meta;

type Story = StoryObj<typeof AnotherSectionContainer>;

export const Default: Story = {
  decorators: (Story) => {
    return (
      <SectionsStoreProvider>
        <Story />
      </SectionsStoreProvider>
    );
  },
  parameters: { layout: "fullscreen" },
  render: () => (
    <AnotherSectionContainer>
      {sections.map(({ Component }, idx) => (
        <AnotherSection key={idx}>
          <Component />
        </AnotherSection>
      ))}
      <AnotherSection>
        <Card className="flex items-center justify-center">1</Card>
      </AnotherSection>
      <AnotherSection>
        <Card className="flex items-center justify-center">2</Card>
      </AnotherSection>
      <AnotherSection>
        <Card className="flex items-center justify-center">3</Card>
      </AnotherSection>
      <AnotherSection>
        <Card className="flex items-center justify-center">4</Card>
      </AnotherSection>
    </AnotherSectionContainer>
  ),
};
