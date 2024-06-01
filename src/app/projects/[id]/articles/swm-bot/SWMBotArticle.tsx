import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function SWMBotArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>SWM Bot</Title>
        <SubTitle>소프트웨어 마에스트로 유저 검색과 멘토링 알림 챗봇</SubTitle>
        <Badges badges={["Express.js", "MongoDB", "Puppeteer"]} />

        <Link href="https://github.com/SOMA-MINI-TEAM-15/chatbot_project" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} fixedWidth />
            <span className="underline">https://github.com/SOMA-MINI-TEAM-15/chatbot_project</span>
          </div>
        </Link>
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default SWMBotArticle;
