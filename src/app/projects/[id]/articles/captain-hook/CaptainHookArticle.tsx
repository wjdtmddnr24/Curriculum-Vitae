import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function CaptainHookArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>Captain Hook</Title>
        <SubTitle>Webhook 기반 알림 서비스</SubTitle>
        <Badges badges={["Webhook", "Nest.js", "Bot", "React", "Next.js", "Tailwind CSS"]} />

        <Link href="https://github.com/ideal6/Captain_Hook_Document" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} fixedWidth />
            <span className="underline">https://github.com/ideal6/Captain_Hook_Document</span>
          </div>
        </Link>
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default CaptainHookArticle;
