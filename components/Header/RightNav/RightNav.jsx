import MuiButton from "../../MuiButton/MuiButton";
import MuiSearchForm from "../../MuiSearchForm/MuiSearchForm";

import classes from "./RightNav.module.css";

export default function RightNav() {
  return (
    <div className={classes.header__right}>
      <MuiSearchForm/>
      <MuiButton label='Login' href='/login'/>
    </div>
  );
}
