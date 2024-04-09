import { ReactNode } from "react";

import GallaryItem from "./GallaryItem";

interface GallaryProps {
  children: ReactNode;
}

const Gallary = ({ children }: GallaryProps) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">{children}</div>;
};

Gallary.Item = GallaryItem;

export default Gallary;
