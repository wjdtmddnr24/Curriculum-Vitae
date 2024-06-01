import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function EvonArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>이비온(evon) 안드로이드 개발자</Title>
        <SubTitle>부제목</SubTitle>
        <Badges badges={["Android", "Java"]} />
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default EvonArticle;
