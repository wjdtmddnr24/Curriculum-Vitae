import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function AcademyServerArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>코딩학원 인트라넷, 채점서버 운영 및 유지보수</Title>
        <SubTitle>부제목</SubTitle>
        <Badges badges={["PHP", "Express.js", "MongoDB", "AWS"]} />
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default AcademyServerArticle;
