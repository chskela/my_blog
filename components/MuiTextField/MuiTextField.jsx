import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./class.module.css";

const MuiTextField = React.memo(
  ({
    type = "search",
    value = "",
    placeholder = "",
    onChange = () => {},
    onBlur = () => {},
    icon = null,
    className,
  }) => (
    <div className={cn(classes.textField, className)}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {icon && <div data-role={"icon"}>{icon}</div>}
    </div>
  )
);

MuiTextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default MuiTextField;
