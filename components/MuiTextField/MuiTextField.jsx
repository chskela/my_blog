import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./class.module.css";

const MuiTextField = React.memo(
  ({ icon, type, value, className, placeholder, onBlur, onChange }) => (
    <div className={cn(classes.textField, className)}>
      <input
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {icon && <div data-role={"icon"}>{icon}</div>}
    </div>
  )
);

MuiTextField.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

MuiTextField.defaultProps = {
  icon: null,
  type: "search",
  value: "",
  className: "",
  placeholder: "Search",
};

MuiTextField.displayName = "MuiTextField";

export default MuiTextField;
