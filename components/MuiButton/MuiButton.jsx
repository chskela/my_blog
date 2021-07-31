import React from "react";
import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";

import classes from "./class.module.css";

const MuiButton = React.memo(
  ({
    label,
    href = "",
    type = "button",
    className = "",
    onClick = () => {},
  }) => (
    <Link href={href}>
      <button
        type={type}
        onClick={(event) => onClick(event)}
        className={cn(classes.button, className)}
      >
        {label}
      </button>
    </Link>
  )
);

MuiButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(["reset", "button", "submite"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MuiButton;
