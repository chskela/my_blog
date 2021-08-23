import React from "react";
import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";

import classes from "./class.module.css";

const MuiButton = React.memo(({ label, type, className, onClick }) => (
  <button
    type={type}
    onClick={(event) => onClick(event)}
    className={cn(classes.button, className)}
  >
    {label}
  </button>
));

MuiButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["reset", "button", "submite"]),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

MuiButton.defaultProps = {
  type: "button",
  className: "",
};

MuiButton.displayName = "MuiButton";

export default MuiButton;
