import SectionCard from "@components/section-card/SectionCard";
import GradientTypography from "@components/gradient-typography/GradientTypography";
import TitledList from "../../titled-list/TitledList";

const { Title, List, Item } = TitledList;

export function TechSkills() {
  return (
    <SectionCard className="px-6 py-8 lg:p-10">
      <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
        Tech Skills
      </GradientTypography>
      <div className="grid sm:grid-cols-[auto_auto] md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(12rem,auto))] gap-10">
        <TitledList>
          <Title>General</Title>
          <List>
            <Item>Algorithm & Problem Solving</Item>
            <Item>Bash, Zsh</Item>
            <Item>Git</Item>
            <Item>Visual Studio</Item>
            <Item>Visual Studio Code</Item>
            <Item>Vim</Item>
            <Item>Intellij IDEA Series</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>Web Frontend</Title>
          <List>
            <Item>HTML5</Item>
            <Item>React, NextJS</Item>
            <Item>CSS, SCSS</Item>
            <Item>Tailwind CSS</Item>
            <Item>Styled Components</Item>
            <Item>Ant Design</Item>
            <Item>Redux</Item>
            <Item>Zustand</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>Backend</Title>
          <List>
            <Item>NodeJS</Item>
            <Item>ExpressJS, NestJS</Item>
            <Item>TypeORM</Item>
            <Item>Socket.IO</Item>
            <Item>RabbitMQ</Item>
            <Item>Amazon Web Services</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>Database</Title>
          <List>
            <Item>MySQL</Item>
            <Item>PostgreSQL</Item>
            <Item>MongoDB</Item>
            <Item>Redis</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>DevOps</Title>
          <List>
            <Item>Docker</Item>
            <Item>Kubernetes</Item>
            <Item>Helm Charts</Item>
            <Item>Argo CD</Item>
            <Item>Gitlab CI</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>Mobile</Title>
          <List>
            <Item>Flutter</Item>
            <Item>Android(Java)</Item>
          </List>
        </TitledList>

        <TitledList>
          <Title>Languages</Title>
          <List>
            <Item>JavaScript</Item>
            <Item>TypeScript</Item>
            <Item>C, C++</Item>
            <Item>Java</Item>
            <Item>Dart</Item>
          </List>
        </TitledList>
      </div>
    </SectionCard>
  );
}
