import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Article from "@components/article/Article";
import Heading from "@components/article/Heading";
import Badges from "@components/article/header/Badges";

const { Header, Footer, Paragraph, Image } = Article;
const { Title, SubTitle } = Header;

function WeboxArticle() {
  return (
    <Article>
      <Header>
        <Title>Webox 클라우드 기반 블랙박스 어플리케이션</Title>
        <SubTitle>소프트웨어 마에스트로 12기 메인 프로젝트</SubTitle>
        <Badges badges={["Badge", "Badge", "Badge", "Badge"]} />
        <div className="flex gap-2 text-2xl text-slate py-2">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </Header>
      <Heading>Heading</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed magna sit amet quam consequat ultrices quis et
        est. Vivamus non maximus dolor. Sed mattis tellus aliquet dui consectetur, eget volutpat tellus viverra. Aliquam
        tincidunt tortor eget dictum gravida. Cras rhoncus arcu lectus, eget mattis eros volutpat vitae. Fusce maximus
        felis et iaculis eleifend. Nullam ut ultricies libero. Curabitur pulvinar commodo purus, accumsan euismod odio
        suscipit at. Curabitur ac mauris dolor. Morbi id tristique nunc. Donec eu sodales dolor. Mauris quis suscipit
        augue. Fusce tempor luctus dignissim. Maecenas mattis ullamcorper lorem, sed vulputate elit laoreet quis. Aenean
        lacinia mi quis elit pellentesque, quis aliquet nisl faucibus.
      </Paragraph>
      <Image
        src={"https://placehold.co/600x400"}
        alt="webox logo"
        size="medium"
        width={600}
        height={400}
        caption={"Lorem ipsum dolor ist amet"}
      />
      <Heading>Heading</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed magna sit amet quam consequat ultrices quis et
        est. Vivamus non maximus dolor. Sed mattis tellus aliquet dui consectetur, eget volutpat tellus viverra. Aliquam
        tincidunt tortor eget dictum gravida. Cras rhoncus arcu lectus, eget mattis eros volutpat vitae. Fusce maximus
        felis et iaculis eleifend. Nullam ut ultricies libero. Curabitur pulvinar commodo purus, accumsan euismod odio
        suscipit at. Curabitur ac mauris dolor. Morbi id tristique nunc. Donec eu sodales dolor. Mauris quis suscipit
        augue. Fusce tempor luctus dignissim. Maecenas mattis ullamcorper lorem, sed vulputate elit laoreet quis. Aenean
        lacinia mi quis elit pellentesque, quis aliquet nisl faucibus.
      </Paragraph>
      <Heading>Heading</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed magna sit amet quam consequat ultrices quis et
        est. Vivamus non maximus dolor. Sed mattis tellus aliquet dui consectetur, eget volutpat tellus viverra. Aliquam
        tincidunt tortor eget dictum gravida. Cras rhoncus arcu lectus, eget mattis eros volutpat vitae. Fusce maximus
        felis et iaculis eleifend. Nullam ut ultricies libero. Curabitur pulvinar commodo purus, accumsan euismod odio
        suscipit at. Curabitur ac mauris dolor. Morbi id tristique nunc. Donec eu sodales dolor. Mauris quis suscipit
        augue. Fusce tempor luctus dignissim. Maecenas mattis ullamcorper lorem, sed vulputate elit laoreet quis. Aenean
        lacinia mi quis elit pellentesque, quis aliquet nisl faucibus.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed magna sit amet quam consequat ultrices quis et
        est. Vivamus non maximus dolor. Sed mattis tellus aliquet dui consectetur, eget volutpat tellus viverra. Aliquam
        tincidunt tortor eget dictum gravida. Cras rhoncus arcu lectus, eget mattis eros volutpat vitae. Fusce maximus
        felis et iaculis eleifend. Nullam ut ultricies libero. Curabitur pulvinar commodo purus, accumsan euismod odio
        suscipit at. Curabitur ac mauris dolor. Morbi id tristique nunc. Donec eu sodales dolor. Mauris quis suscipit
        augue. Fusce tempor luctus dignissim. Maecenas mattis ullamcorper lorem, sed vulputate elit laoreet quis. Aenean
        lacinia mi quis elit pellentesque, quis aliquet nisl faucibus.
      </Paragraph>
      <Footer>Last Update: 2024-04-14</Footer>
    </Article>
  );
}

export default WeboxArticle;
