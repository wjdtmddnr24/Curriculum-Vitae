import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return <section className="h-screen flex items-center justify-center">{children}</section>;
};
