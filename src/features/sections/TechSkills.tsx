import Card from "../../app/components/card/Card";

export function TechSkills() {
  return (
    <Card className="p-10">
      <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold">
        Tech Skills
      </div>
      <div className="grid grid-cols-4 grid-rows-[repeat(2,minmax(12rem,auto))] gap-10 text-lg mt-10">
        <div>
          <div className="text-2xl font-bold mb-2 w-max">General</div>
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
          <div className="text-2xl font-bold mb-2 w-max">Program Languages</div>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C, C++</li>
            <li>Java</li>
            <li>Dart</li>
          </ul>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2 w-max">Web Frontend</div>
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
          <div className="text-2xl font-bold mb-2 w-max">Backend</div>
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
          <div className="text-2xl font-bold mb-2 w-max">Database</div>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2 w-max">DevOps</div>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Helm Charts</li>
            <li>Argo CD</li>
            <li>Gitlab CI</li>
          </ul>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2 w-max">Mobile</div>
          <ul>
            <li>Flutter</li>
            <li>Android(Java)</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
