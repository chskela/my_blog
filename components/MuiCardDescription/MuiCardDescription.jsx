import PropTypes from "prop-types";

import classes from "./class.module.css";

export default function MuiCardDescription({
  category,
  title,
  autor,
  date = "",
  excerpt,
}) {
  return (
    <div className={classes.content}>
      <p data-role="content-category">{category}</p>
      <h1 data-role="content-title">{title}</h1>
      <div data-role="content-avatar">
        <p>{autor}</p>
        <time>{date}</time>
      </div>
      <p data-role="content-excerpt">{excerpt}</p>
    </div>
  );
}

MuiCardDescription.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  date: PropTypes.string,
  excerpt: PropTypes.string.isRequired,
};
