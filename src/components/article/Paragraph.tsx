import classNames from "classnames";

interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

const Paragraph = ({ className, children }: ParagraphProps) => {
  return <p className={classNames("mb-8", className)}>{children}</p>;
};

export default Paragraph;
