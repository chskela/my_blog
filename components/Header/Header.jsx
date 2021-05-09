import LeftNav from "./LeftNav/LeftNav";

import classes from "./Header.module.css";
import RightNav from "./RightNav/RightNav";

export default function Header() {
  return (
    <header className={classes.header}>
      <LeftNav />
      <RightNav />
    </header>
  );
}
