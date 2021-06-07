import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./MuiTextField.module.css";

export default function MuiTextField({
  type = "search",
  value = "",
  placeholder = "",
  onChange = () => {},
  onBlur = () => {},
  icon = null,
  className,
}) {
  return (
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
  );
}

MuiTextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};
