export function TechSkills() {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-200 rounded shadow-2xl w-[80rem] min-h-[32rem] mx-auto my-8 p-8">
      <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-2">
        Tech Skills
      </div>
      <div className="text-xl font-bold mb-2">General</div>
      <div className="grid grid-cols-4 gap-8 ">
        <div>
          <div className="text-xl font-bold">General</div>
          <ul>
            <li>Linux</li>
            <li>Bash/Zsh</li>
            <li>Docker</li>
            <li>Git</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>AWS</li>
            <li>TypeScript</li>
            <li>Algorithm & Problem Solving</li>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
            <li>Intellij IDEA Series</li>
            <li>Vim</li>
            <li>Dev Container</li>
          </ul>
        </div>
        <div>
          <div className="text-xl font-bold">Web Frontend</div>
          <div>
            <ul>
              <li>HTML / CSS / JavaScript</li>
              <li>React</li>
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>SCSS</li>
              <li>Styled Components / Emotion</li>
              <li>Redux</li>
              <li>Zustand</li>
              <li>Ant Design</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Backend</div>
          <div>
            <ul>
              <li>NodeJS</li>
              <li>Express.js</li>
              <li>SocketIO</li>
              <li>NestJS</li>
              <li>TypeScript</li>
              <li>TypeORM</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Mobile</div>
          <div>
            <ul>
              <li>Flutter / Dart</li>
              <li>Android / Java</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Database</div>
          <div>
            <ul>
              <li>MySQL</li>
              <li>Mongoose</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">DevOps</div>
          <div>
            <ul>
              <li>Kubernetes</li>
              <li>Helm Charts</li>
              <li>Argo CD</li>
              <li>Gitlab CI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
