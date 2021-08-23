import React from "react";
import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";

import classes from "./class.module.css";

import { MuiCardDescription } from "../index";

const MuiArticle = React.memo(({ post, classNames }) => {
  const { title, author, date, excerpt, category, slug } = post;

  return (
    <Link href={`/posts/${slug}`} passHref>
      <section className={cn(classes.wrapper, classNames?.wrapper)}>
        <div className={cn(classes.content, classNames?.content)}>
          <MuiCardDescription
            category={category}
            title={title}
            author={author}
            date={date}
            excerpt={excerpt}
          />
        </div>
      </section>
    </Link>
  );
});

MuiArticle.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  className: PropTypes.shape({
    wrapper: PropTypes.string,
    content: PropTypes.string,
  }),
};

MuiArticle.defaultProps = {
  className: {
    wrapper: "",
    content: "",
  },
};

MuiArticle.displayName = "MuiArticle";

export default MuiArticle;
