import classNames from "classnames";
import { ReactNode } from "react";

const TitledList = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={className}>{children}</div>;
};

const Title = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <h1 className={classNames("w-max text-xl font-bold text-slate-800 dark:text-slate-200 mb-1", className)}>
      {children}
    </h1>
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
