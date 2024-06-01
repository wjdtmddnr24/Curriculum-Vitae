import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function CamtactArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>Camtact</Title>
        <SubTitle>원격 회전캠을 이용한 비대면 시험 감독 플랫폼</SubTitle>
        <Badges badges={["WebRTC", "React", "Electron.js", "Express.js", "Headless CMS", "Raspberry Pi"]} />

        <Link href="https://github.com/2020pingus/camtact_document" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} fixedWidth />
            <span className="underline">https://github.com/2020pingus/camtact_document</span>
          </div>
        </Link>
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default CamtactArticle;
