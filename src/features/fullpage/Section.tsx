"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import { withNamedIndex } from "./withNamedIndex";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={classNames("h-screen max-h-screen flex flex-col justify-center items-center", className)}>
      {children}
    </section>
  );
};

export default withNamedIndex(Section);
