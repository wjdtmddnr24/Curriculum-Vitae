import { ReactNode } from "react";

import GallaryItem from "./GallaryItem";

interface ProjectGallaryProps {
  children: ReactNode;
}

const ProjectGallary = ({ children }: ProjectGallaryProps) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">{children}</div>;
};

ProjectGallary.Item = GallaryItem;

export default ProjectGallary;
