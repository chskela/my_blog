import MuiButton from "../../MuiButton/MuiButton";
import MuiTextField from "../../MuiTextField/MuiTextField";
import { MuiSearch } from "../../icons";

import classes from "./RightNav.module.css";

export default function RightNav() {
  return (
    <div className={classes.header__right}>
      <MuiTextField
        icon={<MuiSearch size={30} />}
        className={classes.header__search}
      />
      <MuiButton label="Login" href="/login" />
    </div>
  );
}
