import Link from "next/link";

import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./MuiButton.module.css";

export default function MuiButton({
  label,
  href = "",
  className = "",
  onClick = () => {},
}) {
  return (
    <Link href={href}>
      <button
        onClick={(event) => onClick(event)}
        className={cn(classes.button, className)}
      >
        {label}
      </button>
    </Link>
  );
}

MuiButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
