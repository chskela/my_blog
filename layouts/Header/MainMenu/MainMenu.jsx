import MenuItem from "../MenuItem/MenuItem";

import classes from "./class.module.css";

export default function MainMenu({ list }) {
  return (
    <nav>
      <ul className={classes.nav_list}>
        {list.map((item, i) => (
          <MenuItem {...item} key={item.title + i} />
        ))}
      </ul>
    </nav>
  );
}
