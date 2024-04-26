import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function RobotControlPlatformArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>로봇 관제 플랫폼 설계 및 개발</Title>
        <SubTitle>부제목</SubTitle>
        <Badges badges={["Badge", "Badge", "Badge", "Badge"]} />
      </Header>

      <Heading>Heading</Heading>
      <Paragraph>asdf</Paragraph>
      <Heading>Heading</Heading>
      <Paragraph>asdf</Paragraph>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default RobotControlPlatformArticle;
