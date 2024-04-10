import classNames from "classnames";
import { ReactNode } from "react";

import GradientTypography from "../gradient-typography/GradientTypography";

const TitledList = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={className}>{children}</div>;
};

const Title = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <GradientTypography as="h1" className={classNames("w-max text-xl font-bold mb-1", className)}>
      {children}
    </GradientTypography>
  );
};

const List = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <ul className={className}>{children}</ul>;
};

const Item = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <li className={className}>{children}</li>;
};

TitledList.Title = Title;
TitledList.List = List;
TitledList.Item = Item;

export default TitledList;
