import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}
