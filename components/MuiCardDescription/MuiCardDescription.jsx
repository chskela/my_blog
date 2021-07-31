import React from "react";
import PropTypes from "prop-types";

import classes from "./class.module.css";

const MuiCardDescription = React.memo(
  ({ category, title, author, date = "", excerpt }) => (
    <div className={classes.content}>
      <p data-role="content-category">{category}</p>
      <h1 data-role="content-title">{title}</h1>
      <div data-role="content-avatar">
        <p>{author.name}</p>
        <time>{date}</time>
      </div>
      <p data-role="content-excerpt">{excerpt}</p>
    </div>
  )
);

MuiCardDescription.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  date: PropTypes.string,
  excerpt: PropTypes.string.isRequired,
};

export default MuiCardDescription;
