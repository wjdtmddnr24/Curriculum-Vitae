import type { Meta, StoryObj } from "@storybook/react";
import camtactPic from "../../../public/camtact.png";
import captainHookPic from "../../../public/captain_hook.png";
import portfolioPic from "../../../public/portfolio_combined_compressed.png";
import weboxLogoPic from "../../../public/webox_logo.png";
import Gallary from "./Gallary";

const meta: Meta<typeof Gallary> = {
  component: Gallary,
  decorators: (Story) => (
    <div className="w-[1024px] p-10">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Gallary>;

export const Primary: Story = {
  render: (...args) => (
    <Gallary {...args}>
      <Gallary.Item title="Portfolio" description="포트폴리오 웹페이지" thumbnailURL={portfolioPic} href="#" />
      <Gallary.Item
        title="Webox"
        description="클라우드 기반 블랙박스 애플리케이션"
        thumbnailURL={weboxLogoPic}
        href="#"
      />
      <Gallary.Item
        title="Captain Hook"
        description="Webhook 기반 알림 서비스"
        thumbnailURL={captainHookPic}
        href="#"
      />
      <Gallary.Item
        title="SWM Chatbot"
        description="소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇"
        thumbnailURL={undefined}
        href="#"
      />
      <Gallary.Item
        title="Camtact"
        description="원격 회전캠을 이용한 비대면 시험 감독 플랫폼"
        thumbnailURL={camtactPic}
        href="#"
      />
      <Gallary.Item title="TCQR" description="문자열 압축기반 QR코드 애플리케이션" thumbnailURL={undefined} href="#" />
    </Gallary>
  ),
};
