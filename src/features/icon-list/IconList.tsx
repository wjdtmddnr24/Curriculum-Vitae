import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface IconListProps {
  children: ReactNode;
}

export function IconList({ children }: IconListProps) {
  return <ul>{children}</ul>;
}

interface ItemProps {
  icon?: IconProp;
  children: ReactNode;
}

function Item({ icon, children }: ItemProps) {
  return (
    <li className="flex items-baseline gap-1.5">
      {icon && <FontAwesomeIcon icon={icon} />}
      <div>{children}</div>
    </li>
  );
}

IconList.Item = Item;
