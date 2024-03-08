import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface IconListProps {
  className?: string;
  children: ReactNode;
}

export function IconList({ className, children }: IconListProps) {
  return <ul className={className}>{children}</ul>;
}

interface ItemProps {
  icon?: IconProp;
  children: ReactNode;
}

function Item({ icon, children }: ItemProps) {
  return (
    <li className="flex gap-1.5">
      {icon && <FontAwesomeIcon icon={icon} className="mt-[0.2rem]" fixedWidth />}
      <div className="align-text-bottom">{children}</div>
    </li>
  );
}

IconList.Item = Item;
