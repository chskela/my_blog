import React from "react";
import cn from "classnames";
import Link from "next/link";

import Logo from "./Logo/Logo";
import menuList from "./menuList";
import MainMenu from "./MainMenu/MainMenu";

import useInput from "@hooks/useInput";
import { MuiSearch } from "@components/icons";
import { MuiButton, MuiTextField } from "@components";

import classes from "./class.module.css";

export default function Header() {
  const { value, onChange } = useInput("");

  const Icon = React.forwardRef(() => (
    <MuiSearch size={30} className={classes.header__icon} />
  ));

  return (
    <header className={classes.header}>
      <div className={classes.header__left}>
        <Logo />
        <MainMenu list={menuList} />
      </div>

      <div className={classes.header__right}>
        <MuiTextField
          type={"text"}
          value={value}
          onBlur={() => {}}
          onChange={onChange}
          placeholder={""}
          className={cn(classes.header__search, {
            [classes.border]: !!value,
          })}
          icon={
            <Link href="/tags">
              <Icon />
            </Link>
          }
        />
        {/* <MuiButton label="Login" href="/login" /> */}
      </div>
    </header>
  );
}
