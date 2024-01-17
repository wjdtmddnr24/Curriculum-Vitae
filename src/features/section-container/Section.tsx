import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="h-screen max-h-screen flex flex-col justify-center items-center">{children}</section>;
};

export default Section;
