import Article from "@components/article/Article";
import NotFinishedNotification from "@components/article/NotFinishedNotification";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image, Heading } = Article;
const { Title, SubTitle } = Header;

function AcademyTeacherArticle() {
  return (
    <Article>
      <Header>
        <NotFinishedNotification className="my-4" />
        <Title>코딩학원 강사 및 프로젝트 멘토</Title>
        <SubTitle>부제목</SubTitle>
        <Badges badges={["C/C++", "알고리즘"]} />
      </Header>

      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default AcademyTeacherArticle;
