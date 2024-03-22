import Card from "../../components/card/Card";
import { ProjectGallary } from "../project-gallary/ProjectGallary";

export function Projects() {
  return (
    <Card className="p-10">
      <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-8">
        Projects
      </div>
      <ProjectGallary />
    </Card>
  );
}
