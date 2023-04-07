import { ProjectGallary } from "./ProjectGallary";

export function Projects() {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-200 rounded shadow-2xl w-[88rem] min-h-[35rem] mx-auto p-10">
      <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-8">
        Projects
      </div>
      <ProjectGallary />
    </div>
  );
}
