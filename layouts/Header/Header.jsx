import Logo from "./Logo/Logo";
import menuList from "./menuList";
import { MuiSearch } from "../../components/icons";

import MainMenu from "./MainMenu/MainMenu";
import MuiButton from "../../components/MuiButton/MuiButton";
import MuiTextField from "../../components/MuiTextField/MuiTextField";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__left}>
        <Logo />
        <MainMenu list={menuList} />
      </div>
      <div className={classes.header__right}>
        <MuiTextField
          icon={<MuiSearch size={30} />}
          className={classes.header__search}
        />
        <MuiButton label="Login" href="/login" />
      </div>
    </header>
  );
}
