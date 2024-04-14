import classNames from "classnames";

import Image from "./Image";
import Paragraph from "./Paragraph";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface ArticleProps {
  className?: string;
  children?: React.ReactNode;
}

const Article = ({ className, children }: ArticleProps) => {
  return <div className={classNames("", className)}>{children}</div>;
};

Article.Header = Header;
Article.Footer = Footer;
Article.Image = Image;
Article.Paragraph = Paragraph;

export default Article;
