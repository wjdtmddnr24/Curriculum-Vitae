import { Metadata, Viewport } from "next";

import { SectionContainer, SectionInfo } from "@/components/section-container/SectionContainer";
import { Awards } from "@/components/sections/awards/Awards";
import { Profile } from "@/components/sections/profile/Profile";
import { Projects } from "@/components/sections/projects/Projects";
import { TechSkills } from "@/components/sections/tech-skills/TechSkills";
import profilePic from "@public/profile.png";

import { Careers } from "../components/sections/careers/Careers";

export const metadata: Metadata = {
  title: "Portfolio: 정승욱",
  description: "Web Portfolio introducing 정승욱",
  metadataBase: new URL("https://me.chocola.moe"),
  openGraph: {
    title: "Portfolio: 정승욱",
    description: "Web Portfolio introducing 정승욱",
    url: "https://me.chocola.moe",
    locale: "ko_KR",
    type: "website",
    images: [{ url: profilePic.src }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const sections: SectionInfo[] = [
  {
    title: "Profile",
    Component: <Profile />,
    hash: "",
  },
  {
    title: "Careers",
    Component: <Careers />,
    hash: "#Careers",
  },
  {
    title: "Tech Skills",
    Component: <TechSkills />,
    hash: "#Tech Skills",
  },
  {
    title: "Projects",
    Component: <Projects />,
    hash: "#Projects",
  },
  {
    title: "Awards",
    Component: <Awards />,
    hash: "#Awards",
  },
];

export default function MainPage() {
  return (
    <>
      <SectionContainer sections={sections} />
    </>
  );
}
