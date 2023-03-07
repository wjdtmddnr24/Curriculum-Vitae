export function TechSkills() {
  return (
    <div className="bg-white rounded shadow w-[72rem] min-h-[32rem] mx-auto my-8 relative -top-24 -mb-[4rem] p-8">
      <div className="text-2xl text-transparent  bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 font-bold mb-4">
        Tech Skills
      </div>
      <div className="grid grid-cols-4">
        <div>
          <div className="text-xl font-bold">General</div>
          <div>
            <ul>Linux</ul>
            <ul>Docker</ul>
            <ul>Kubernetes</ul>
            <ul>Git</ul>
            <ul>C/C++</ul>
            <ul>Flutter / Dart</ul>
            <ul>Android / Java</ul>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Web Frontend</div>
          <div>
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SCSS</li>
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
          <div className="text-xl font-bold">Database</div>
          <div>
            <ul>
              <li>MySQL</li>
              <li>Mongoose</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
