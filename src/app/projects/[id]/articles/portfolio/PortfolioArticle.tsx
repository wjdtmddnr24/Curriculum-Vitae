import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function PortfolioArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>Portfolio</Title>
        <SubTitle>개인 포트폴리오 웹페이지</SubTitle>
        <Badges badges={["React", "Next.js", "Tailwind CSS", "Vercel"]} />
        <Link href="https://github.com/wjdtmddnr24/Curriculum-Vitae" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} fixedWidth />
            <span className="underline">https://github.com/wjdtmddnr24/Curriculum-Vitae</span>
          </div>
        </Link>
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default PortfolioArticle;
