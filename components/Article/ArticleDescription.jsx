import PropTypes from "prop-types";

import classes from "./ArticleDescription.module.css";

export default function ArticleDescription({
  category,
  title,
  autor,
  date,
  excerpt,
}) {
  return (
    <article>
      <p className={classes.content__category}>{category}</p>
      <h1 className={classes.content__title}>{title}</h1>
      <div className={classes.content__avatar}>
        <p className={classes.content__autor}>{autor}</p>
        <time>{date}</time>
      </div>
      <p className={classes.content__excerpt}>{excerpt}</p>
    </article>
  );
}

ArticleDescription.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
