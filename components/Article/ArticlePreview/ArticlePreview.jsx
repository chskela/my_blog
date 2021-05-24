import PropTypes from "prop-types";
import Image from "next/image";

import cn from "classnames";

import ArticleDescription from "../ArticleDescription/ArticleDescription";

import classes from "./ArticlePreview.module.css";

export default function ArticlePreview({ article, mini = false }) {
  const { category, title, autor, date, excerpt, url } = article;
  const imageClass = cn(classes.image, { [classes.image_mini]: mini });
  const descriptionClass = cn(classes.description, {
    [classes.description_mini]: mini,
  });
  return (
    <article className={classes.article}>
      <div className={imageClass}>
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
