import SectionCard from "@components/section-card/SectionCard";
import GradientTypography from "@components/gradient-typography/GradientTypography";

export function TechSkills() {
  return (
    <SectionCard className="px-6 py-8 lg:p-10">
      <GradientTypography as="h1" className="w-max text-3xl font-bold mb-8">
        Tech Skills
      </GradientTypography>
      <div className="grid sm:grid-cols-[auto_auto] md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(12rem,auto))] gap-10">
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            General
          </GradientTypography>
          <ul>
            {/* ETC */}
            <li>Algorithm & Problem Solving</li>
            {/* Dev */}
            <li>Bash, Zsh</li>
            <li>Git</li>
            {/* Editor & IDE */}
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
            <li>Vim</li>
            <li>Intellij IDEA Series</li>
          </ul>
        </div>

        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            Web Frontend
          </GradientTypography>
          <ul>
            <li>HTML5</li>
            <li>React, NextJS</li>
            <li>CSS, SCSS</li>
            <li>Tailwind CSS</li>
            <li>Styled Components</li>
            <li>Ant Design</li>
            <li>Redux</li>
            <li>Zustand</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            Backend
          </GradientTypography>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS, NestJS</li>
            <li>TypeORM</li>
            <li>Socket.IO</li>
            <li>RabbitMQ</li>
            <li>Amazon Web Services</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            Database
          </GradientTypography>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            DevOps
          </GradientTypography>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Helm Charts</li>
            <li>Argo CD</li>
            <li>Gitlab CI</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            Mobile
          </GradientTypography>
          <ul>
            <li>Flutter</li>
            <li>Android(Java)</li>
          </ul>
        </div>
        <div>
          <GradientTypography as="div" className="w-max text-xl font-bold mb-1">
            Languages
          </GradientTypography>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C, C++</li>
            <li>Java</li>
            <li>Dart</li>
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}
