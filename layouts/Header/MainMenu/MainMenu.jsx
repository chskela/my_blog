import React from "react";

import classes from "./class.module.css";

import MenuItem from "../MenuItem/MenuItem";

const MainMenu = ({ list }) => {
  return (
    <nav>
      <ul className={classes.nav_list}>
        {list.map((item, i) => (
          <MenuItem {...item} key={item.title + i} />
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(MainMenu);
