import Link from "next/link";

import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./MuiButton.module.css";

export default function MuiButton({
  label,
  href = "",
  type = "button",
  className = "",
  onClick = () => {},
}) {
  return (
    <Link href={href}>
      <button
        type={type}
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
  type: PropTypes.oneOf(["reset", "button", "submite"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
