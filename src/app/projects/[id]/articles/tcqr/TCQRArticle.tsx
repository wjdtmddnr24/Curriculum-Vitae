import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function TCQRArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>TCQR - Text Compressed QR Code</Title>
        <SubTitle>문자열 압축기반 QR코드 애플리케이션</SubTitle>
        <Badges badges={["Android", "Java"]} />

        <Link href="https://github.com/wjdtmddnr24/TCQR" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} fixedWidth />
            <span className="underline">https://github.com/wjdtmddnr24/TCQR</span>
          </div>
        </Link>
        <Link href="https://apkcombo.com/tcqr-text-compressed-qr-code/org.dyndns.wjdtmddnr24.tcqr/" target="_blank">
          <div className="flex justify-start gap-1.5 py-2">
            <FontAwesomeIcon className="text-2xl" icon={faLink} fixedWidth />
            <span className="underline">
              https://apkcombo.com/tcqr-text-compressed-qr-code/org.dyndns.wjdtmddnr24.tcqr/
            </span>
          </div>
        </Link>
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default TCQRArticle;
