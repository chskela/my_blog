import React from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

import classes from "./class.module.css";

import MuiCardDescription from "../MuiCardDescription/MuiCardDescription";

const MuiCard = React.memo(({ article, className }) => {
  const { category, title, author, date, excerpt, url, slug } = article;
  const src = `/assets/blog/${slug}/${url}`;

  return (
    <Link href={`/posts/${slug}`}>
      <article className={cn(classes.article, className)}>
        <div data-role="image">
          <Image
            src={src}
            alt={title}
            width={370}
            height={300}
            layout="responsive"
          />
        </div>
        <div data-role="description">
          <MuiCardDescription
            category={category}
            title={title}
            author={author}
            date={date}
            excerpt={excerpt}
          />
        </div>
      </article>
    </Link>
  );
});

MuiCard.propTypes = {
  article: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

MuiCard.defaultProps = {
  className: "",
};

export default MuiCard;
