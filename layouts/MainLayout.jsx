import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import classes from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}
