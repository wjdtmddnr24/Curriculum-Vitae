import Card from "../../app/components/card/Card";
import { ProjectGallary } from "./ProjectGallary";

export function Projects() {
  return (
    <Card className="w-[88rem] p-10">
      <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-8">
        Projects
      </div>
      <ProjectGallary />
    </Card>
  );
}
