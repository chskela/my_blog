import PropTypes from "prop-types";
import Image from "next/image";

import ArticleDescription from "../ArticleDescription/ArticleDescription";

import classes from "./ArticlePreview.module.css";

export default function ArticlePreview({ article }) {
  const { category, title, autor, date, excerpt, url } = article;
  return (
    <article className={classes.article}>
      <div className={classes.image}>
        <Image
          src={url}
          alt={title}
          width={370}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={classes.description}>
        <ArticleDescription
          category={category}
          title={title}
          autor={autor}
          date={date}
          excerpt={excerpt}
        />
      </div>
    </article>
  );
}

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
