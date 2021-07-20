import cn from "classnames";
import PropTypes from "prop-types";

import { formatDate } from "@lib/formatDate";

import MuiCardDescription from "@components/MuiCardDescription/MuiCardDescription";

import classes from "./class.module.css";

export default function MuiArticle({
  post,
  classNames = {
    wrapper: null,
    content: null,
  },
}) {
  const { title, author, date, excerpt, category } = post;
  const postDate = formatDate(date);

  return (
    <section className={cn(classes.wrapper, classNames.wrapper)}>
      <div className={cn(classes.content, classNames.content)}>
        <MuiCardDescription
          category={category}
          title={title}
          autor={author.name}
          date={postDate}
          excerpt={excerpt}
        />
      </div>
    </section>
  );
}

MuiArticle.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  className: PropTypes.shape({
    wrapper: PropTypes.string,
    content: PropTypes.string,
  }),
};