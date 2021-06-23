import React from "react";
import MenuItem from "../MenuItem/MenuItem";

import classes from "./MainMenu.module.css";

export default function MainMenu({ list }) {
  return (
    <nav>
      <ul className={classes.nav_list}>
        {list.map((item, i) => (
          <MenuItem {...item} key={i} />
        ))}
      </ul>
    </nav>
  );
}
