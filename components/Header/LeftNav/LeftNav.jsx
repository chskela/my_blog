import classes from "./LeftNav.module.css";

import MainMenu from "../MainMenu/MainMenu";
import Logo from "../Logo/Logo";
import menuList from "../menuList";

export default function LeftNav() {
  return (
    <div className={classes.header__left}>
      <Logo />
      <MainMenu list={menuList} />
    </div>
  );
}
