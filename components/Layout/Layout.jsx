import React from "react";
import Header from "../Header/Header";

import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
