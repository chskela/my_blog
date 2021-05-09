import React from "react";

import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main>
      <div className={classes.wrapper}>{children}</div>
    </main>
  );
}
