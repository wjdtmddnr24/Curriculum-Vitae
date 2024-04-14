import classNames from "classnames";

interface BadgesProps {
  className?: string;
  badges?: React.ReactNode[];
}

const Badges = ({ badges, className }: BadgesProps) => {
  return (
    <div className={classNames("flex gap-2", className)}>
      {badges?.map((badge, index) => (
        <span
          key={index}
          className="text-xs w-max h-max px-1.5 py-0.5 border border-slate-700 dark:border-slate-300 rounded-full"
        >
          {badge}
        </span>
      ))}
    </div>
  );
};

export default Badges;
