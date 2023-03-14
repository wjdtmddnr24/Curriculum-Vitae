import Head from "next/head";
import { Awards } from "../features/Awards";
import { Projects } from "../features/Projects";
import { Summary } from "../features/Summary";
import { TechSkills } from "../features/TechSkills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 flex flex-col">
          <Summary />
          <TechSkills />
          <Awards />
          <Projects />
        </div>
      </main>
    </>
  );
}
