import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function WeboxArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>Webox</Title>
        <SubTitle>퍼스널 모빌리티를 위한 클라우드 기반 블랙박스 애플리케이션</SubTitle>
        <Badges badges={["AWS", "Kubernetes", "MSA", "RabbitMQ", "Nest.js", "Flutter", "FFMpeg", "YoloV5"]} />
        <Link href="https://github.com/wjdtmddnr24/webox" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} fixedWidth />
            <span className="underline">https://github.com/wjdtmddnr24/webox</span>
          </div>
        </Link>
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default WeboxArticle;
