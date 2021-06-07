import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./MuiSearchForm.module.css";

export default function MuiSearchForm() {
  return (
    <div className={classes.form}>
      <input type="text" className={classes.form__input} />
    </div>
  );
}
