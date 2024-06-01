import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function AirforceArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>공군 교육훈련매체개발병</Title>
        <SubTitle>부제목</SubTitle>
        <Badges badges={["React.js", "Three.js", "Electron.js", "SCSS", "Styled Components"]} />
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default AirforceArticle;
