import Card from "../../components/card/Card";
import GradientTypography from "../../components/gradient-typography/GradientTypography";
import { Section } from "../../components/section-container/Section";

export function TechSkills() {
  return (
    <Section>
      <Card className="p-6 lg:p-10">
        <GradientTypography as="h1" className="w-max text-2xl font-bold">
          Tech Skills
        </GradientTypography>
        <div className="grid sm:grid-cols-[auto_auto] md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(12rem,auto))] gap-10 mt-10">
          <div>
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">General</div>
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
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">Program Languages</div>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>C, C++</li>
              <li>Java</li>
              <li>Dart</li>
            </ul>
          </div>
          <div>
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">Web Frontend</div>
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
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">Backend</div>
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
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">Database</div>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
          <div>
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">DevOps</div>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Helm Charts</li>
              <li>Argo CD</li>
              <li>Gitlab CI</li>
            </ul>
          </div>
          <div>
            <div className="w-max text-xl text-slate-800 dark:text-slate-200 font-bold mb-2">Mobile</div>
            <ul>
              <li>Flutter</li>
              <li>Android(Java)</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  );
}
