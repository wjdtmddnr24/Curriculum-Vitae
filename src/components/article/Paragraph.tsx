import classNames from "classnames";

interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

const Paragraph = ({ className, children }: ParagraphProps) => {
  return <div className={classNames("mb-8", className)}>{children}</div>;
};

export default Paragraph;
